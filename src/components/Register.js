import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import {
    Wrapper,
    MainSection,
    FormContainer,
    Title,
    Subtitle,
    Form,
    InputField,
    SubmitButton,
    ErrorBanner,
    SuccessBanner,
    CloseButton,
    CustomLink
} from '../styles/GlobalStyles.styles';
import Header from './Header';
import { apiHost } from "../constants.js";

const RegisterPage = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', password: '', email: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [showErrorBanner, setShowErrorBanner] = useState(false);
    const [showSuccessBanner, setShowSuccessBanner] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
        setShowErrorBanner(false);
        setShowSuccessBanner(false);

        try {
            await axios.post(`${apiHost}/api/users/register`, formData);
            setMessage('Registration successful');
            setShowSuccessBanner(true);
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setMessage('Error registering');
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
        <Wrapper>
            <Header></Header>
            <MainSection>
                <FormContainer>
                    <Title>Register to Unify</Title>
                    <Subtitle>Join Us and Start Your Journey Today!</Subtitle>
                    <Form onSubmit={handleSubmit}>
                        <InputField
                            type="text"
                            name="firstName"
                            placeholder="Firstname"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <InputField
                            type="text"
                            name="lastName"
                            placeholder="Lastname"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                        <InputField
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <InputField
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <SubmitButton type="submit" disabled={isLoading}>
                            {isLoading ? <ClipLoader color={'#fff'} loading={true} size={24} /> : 'Register'}
                        </SubmitButton>
                    </Form>
                    <CustomLink>
                        Already have an account? <Link to="/login">Login Here</Link>
                    </CustomLink>
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
                </FormContainer>
            </MainSection>
        </Wrapper>
    );
};

export default RegisterPage;
