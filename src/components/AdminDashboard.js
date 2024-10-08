// AdminDashboard.js
import React, { useState } from 'react';
import {
    DashboardLayout,
    Card
} from '../styles/GlobalStyles.styles';
import Sidebar from './Sidebar';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Introduction from './Introduction';
import Profile from './Profile';
import DynamicTable from './DynamicTable';

const navbar = [
    {
        items: [
            { name: 'Introduction', route: '/admin/intro' },
        ],
    },
    {
        title: 'Student Management',
        items: [
            { name: 'Add Student', route: '/admin/add-student' },
            { name: 'Registered Students', route: '/admin/registered-students' },
        ],
    },
    {
        title: 'App Management',
        items: [
            { name: 'Application Decision', route: '/admin/application-decision' },
            { name: 'Application Stats', route: '/admin/application-stats' },
        ],
    },
    {
        title: 'Settings',
        items: [
            { name: 'Profile', route: '/admin/profile' },
            { name: 'Logout', route: '/admin/logout' },
        ],
    },
];

const title = "Welcome to the Admin Panel of Unify";
const subtitle = "Streamline your management of student applications efficiently!";
const sections = [
    {
        heading: "Student Management",
        content: "Efficiently manage student profiles with a comprehensive set of tools at your disposal. Track each student's application status in real time, ensuring you have up-to-date information on their progress. Easily update records as needed, from personal details to academic achievements, and maintain a complete history of interactions and documents. Our platform also facilitates communication with students, allowing you to send notifications, reminders, or important updates directly through the system. With Unify's Student Management tools, you can provide personalized support and foster strong relationships with each student."
    },
    {
        heading: "Application Process Management",
        content: "Oversee the entire application process seamlessly, from initial submission to final decision-making. Our robust system allows you to monitor each application’s journey, ensuring that every applicant receives timely updates and support. Evaluate and review student applications efficiently, utilizing our built-in feedback tools to provide constructive insights. Make informed decisions with access to comprehensive applicant data, supporting documentation, and assessment criteria. With Unify, you can ensure a smooth and transparent application experience for all applicants, fostering trust and satisfaction throughout the process."
    }
];

const headers = ['First Name', 'Last Name', 'Email', 'Phone Number', 'Address', 'Guardian', 'Gender', 'Date of Birth', 'Nationality'];
const data = [
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', phone: '987-654-3210' }
];

const handleEdit = (rowIndex) => {
    console.log(`Edit row: ${rowIndex}`);
};

const handleDelete = (rowIndex) => {
    console.log(`Delete row: ${rowIndex}`);
};

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Header />
            <DashboardLayout>
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} sections={navbar} />

                <div>
                    <Routes>
                        <Route path="intro" element={<Introduction title={title} subtitle={subtitle} sections={sections} />} />
                        <Route path="add-student" element={<Card><Profile showEditButton={false} title={'ADD STUDENT PROFILE'} /></Card>} />
                        <Route path="registered-students" element={<Card><DynamicTable title={'REGISTERED STUDENTS DATA'} headers={headers}
                            data={data}
                            onEdit={handleEdit}
                            onDelete={handleDelete} /></Card>} />
                        <Route path="application-decision" element={<Card><DynamicTable title={'APPLICATION DECISION'} headers={headers}
                            data={data}
                            onEdit={handleEdit}
                            onDelete={handleDelete} /></Card>} />
                        <Route path="profile" element={<Card><Profile showEditButton={true} title={'MY PROFILE'} /></Card>} />
                        {/* Add more routes here */}
                    </Routes>
                </div>
            </DashboardLayout>
        </>
    );
};

export default AdminDashboard;
