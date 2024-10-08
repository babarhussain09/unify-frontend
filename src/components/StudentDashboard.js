// StudentDashboard.js
import React, { useState, useEffect } from 'react';
import {
    DashboardLayout,
    Card,
} from '../styles/GlobalStyles.styles';
import Sidebar from './Sidebar';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Introduction from './Introduction';
import Profile from './Profile';
import DynamicTable from './DynamicTable';
import ApplicationForm from './Application';
import { apiHost } from '../constants';

const navbar = [
    {
        items: [
            { name: 'Introduction', route: '/student/intro' },
        ],
    },
    {
        title: 'App Management',
        items: [
            { name: 'Create Application', route: '/student/create-application' },
            { name: 'Applications List', route: '/student/applications' },
        ],
    },
    {
        title: 'Settings',
        items: [
            { name: 'Profile', route: '/student/profile' },
            { name: 'Logout', route: '/login' },
        ],
    },
];

const title = "Welcome to Your Unify Dashboard";
const subtitle = "Your path to academic success begins now!";
const sections = [
    {
        heading: "Application Process",
        content: "Navigate the application process with ease, ensuring a smooth transition from submission to acceptance. Our step-by-step guidance will help you understand each stage of the application journey, from completing your application forms to submitting necessary documents and preparing for interviews. Get insights into deadlines, required materials, and tips for making your application stand out. With Unify, you'll never feel alone; we're here to assist you every step of the way."
    },
    {
        heading: "Student Support Services",
        content: "Access a comprehensive range of support services tailored to foster both your academic and personal growth. Our dedicated team is committed to helping you succeed, offering resources such as academic advising, tutoring services, mental health counseling, and career development workshops. Whether you need assistance with course selection, academic challenges, or life skills, our support services are here to empower you on your journey to success. Explore our programs and connect with the resources that will help you thrive in your academic and personal endeavors."
    },
];

const handleEdit = (rowIndex) => {
    console.log(`Edit row: ${rowIndex}`);
};

const handleDelete = (rowIndex) => {
    console.log(`Delete row: ${rowIndex}`);
};

const StudentDashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [headers, setHeaders] = useState([]);
    const [data, setData] = useState([]);
    console.log(user);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const fetchUserApplications = async () => {
            try {
                const response = await fetch(`${apiHost}/api/applications/user/${user.id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch applications');
                }

                const data = await response.json();
                setData(data);
                setHeaders(Object.keys(data[0]));
            } catch (err) {
                console.error('Error fetching user applications:', err);
            }
        };

        // Call the fetch function
        if (user.id) {
            fetchUserApplications();
        }
    }, [user.id]);

    return (
        <>
            <Header />
            <DashboardLayout>
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} sections={navbar} />

                <div>
                    <Routes>
                        <Route path="intro" element={<Introduction title={title} subtitle={subtitle} sections={sections} />} />
                        <Route path="create-application" element={<Card><ApplicationForm showEditButton={false} title={'CREATE APPLICATION'} user={user} /></Card>} />
                        <Route path="applications" element={<Card><DynamicTable title={'MY APPLICATIONS'} headers={headers}
                            data={data}
                            onEdit={handleEdit}
                            onDelete={handleDelete} /></Card>} />
                        <Route path="profile" element={<Card><Profile showEditButton={true} title={'MY PROFILE'} user={user} /></Card>} />
                        <Route path="logout" />
                    </Routes>
                </div>
            </DashboardLayout>
        </>
    );
};

export default StudentDashboard;
