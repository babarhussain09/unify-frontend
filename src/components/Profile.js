import React, { useState } from 'react';
import {
    ProfileForm,
    FormField,
    Label,
    Input,
    Select,
    ButtonContainer,
    SubmitButton,
    CardTitle,
    ErrorBanner,
    CloseButton,
    SuccessBanner
} from '../styles/GlobalStyles.styles';
import ClipLoader from 'react-spinners/ClipLoader';
import { apiHost } from '../constants';

const UserProfileForm = ({ showEditButton, title, user }) => {
    const [isEditing, setIsEditing] = useState(!showEditButton);
    const [isLoading, setIsLoading] = useState(false);
    const [showErrorBanner, setShowErrorBanner] = useState(false);
    const [showSuccessBanner, setShowSuccessBanner] = useState(false);
    const [message, setMessage] = useState('');

    const [ProfileFormData, setProfileFormData] = useState({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        guardianName: user.guardianName || '',
        email: user.email || '',
        gender: user.gender || '',
        dateOfBirth: user.dateOfBirth || '',
        nationality: user.nationality || '',
        address: user.address || '',
        phoneNumber: user.phoneNumber || '',
        password: '', // Don't set password to user password for security reasons
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setProfileFormData((prevData) => ({
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

        try {
            console.log(ProfileFormData);
            const response = await fetch(`${apiHost}/api/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ProfileFormData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Update failed:', errorData);
                setMessage('Error while updating profile');
                setShowErrorBanner(true);
            } else {
                const updatedUser = await response.json();
                console.log('Profile updated successfully:', updatedUser);
                localStorage.setItem("user", JSON.stringify(updatedUser));
                setIsEditing(false);
                setMessage('Profile updated successfully');
                setShowSuccessBanner(true);
            }
        } catch (error) {
            console.error('Error during profile update:', error);
            setMessage('Error while updating profile');
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
                    <Label>First Name:</Label>
                    <Input
                        type="text"
                        name="firstName"
                        value={ProfileFormData.firstName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    />
                </FormField>
                <FormField>
                    <Label>Last Name:</Label>
                    <Input
                        type="text"
                        name="lastName"
                        value={ProfileFormData.lastName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    />
                </FormField>
                <FormField>
                    <Label>Guardian Name:</Label>
                    <Input
                        type="text"
                        name="guardianName"
                        value={ProfileFormData.guardianName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    />
                </FormField>
                <FormField>
                    <Label>Email:</Label>
                    <Input
                        type="email"
                        name="email"
                        value={ProfileFormData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    />
                </FormField>
                <FormField>
                    <Label>Gender:</Label>
                    <Select
                        name="gender"
                        value={ProfileFormData.gender}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </Select>
                </FormField>
                <FormField>
                    <Label>Date of Birth:</Label>
                    <Input
                        type="date"
                        name="dateOfBirth"
                        value={ProfileFormData.dateOfBirth}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    />
                </FormField>
                <FormField>
                    <Label>Nationality:</Label>
                    <Input
                        type="text"
                        name="nationality"
                        value={ProfileFormData.nationality}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    />
                </FormField>
                <FormField>
                    <Label>Phone Number:</Label>
                    <Input
                        type="tel"
                        name="phoneNumber"
                        value={ProfileFormData.phoneNumber}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    />
                </FormField>
                <FormField>
                    <Label>Address:</Label>
                    <Input
                        type="text"
                        name="address"
                        value={ProfileFormData.address}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    />
                </FormField>
                <FormField>
                    <Label>Password:</Label>
                    <Input
                        type="password"
                        name="password"
                        value={ProfileFormData.password}
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

export default UserProfileForm;
