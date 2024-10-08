import React, { useState } from 'react';
import {
    ProfileForm,
    FormField,
    Label,
    Input,
    ButtonContainer,
    SubmitButton,
    CardTitle,
    ErrorBanner,
    CloseButton,
    SuccessBanner
} from '../styles/GlobalStyles.styles';
import ClipLoader from 'react-spinners/ClipLoader';
import { apiHost } from '../constants';

const ApplicationForm = ({ showEditButton, title, application, user }) => {
    const [isEditing, setIsEditing] = useState(!showEditButton);
    const [isLoading, setIsLoading] = useState(false);
    const [showErrorBanner, setShowErrorBanner] = useState(false);
    const [showSuccessBanner, setShowSuccessBanner] = useState(false);
    const [message, setMessage] = useState('');

    const [ApplicationFormData, setApplicationFormData] = useState({
        universityName: application?.universityName || '',
        courseName: application?.courseName || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setApplicationFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        setIsLoading(true);
        setMessage('');
        setShowErrorBanner(false);
        setShowSuccessBanner(false);

        console.log(ApplicationFormData);

        try {
            let response;

            if (application && application.id) {
                // Update existing application
                response = await fetch(`${apiHost}/api/applications/${application.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(ApplicationFormData),
                });
            } else {
                // Create new application
                response = await fetch(`${apiHost}/api/applications/user/${user.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(ApplicationFormData),
                });
            }

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Request failed:', errorData);
                setMessage('Error while saving application');
                setShowErrorBanner(true);
            } else {
                const updatedApplication = await response.json();
                console.log('Application saved successfully:', updatedApplication);

                if (showEditButton) {
                    setIsEditing(false);  // Exit edit mode after saving
                }
                setMessage('Application saved successfully');
                setShowSuccessBanner(true);
            }
        } catch (error) {
            console.error('Error during save:', error);
            setMessage('Error while saving application');
            setShowErrorBanner(true);
        } finally {
            setIsLoading(false);
        }
    };

    const closeBanner = () => {
        setShowErrorBanner(false);
        setShowSuccessBanner(false);
    };

    return (
        <>
            <CardTitle>{title}</CardTitle>
            {showErrorBanner && (
                <ErrorBanner>
                    {message}
                    <CloseButton onClick={closeBanner}>×</CloseButton>
                </ErrorBanner>
            )}
            {showSuccessBanner && (
                <SuccessBanner>
                    {message}
                    <CloseButton onClick={closeBanner}>×</CloseButton>
                </SuccessBanner>
            )}
            <ProfileForm>
                <FormField>
                    <Label>University Name:</Label>
                    <Input
                        type="text"
                        name="universityName"
                        value={ApplicationFormData.universityName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    />
                </FormField>
                <FormField>
                    <Label>Course Name:</Label>
                    <Input
                        type="text"
                        name="courseName"
                        value={ApplicationFormData.courseName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    />
                </FormField>
            </ProfileForm>

            <ButtonContainer>
                {showEditButton && (
                    <SubmitButton onClick={handleEdit}>Edit</SubmitButton>
                )}

                <SubmitButton type="submit" onClick={handleSave} disabled={!isEditing}>
                    {isLoading ? <ClipLoader color={'#fff'} loading={true} size={24} /> : 'Save'}
                </SubmitButton>
            </ButtonContainer>
        </>
    );
};

export default ApplicationForm;
