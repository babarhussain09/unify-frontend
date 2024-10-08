import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { apiHost } from '../constants';
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

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
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
            const response = await fetch(`${apiHost}/api/users/login?email=${encodeURIComponent(formData.email)}&password=${encodeURIComponent(formData.password)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            localStorage.setItem("user", JSON.stringify(data));
            if (data.id) {
                setMessage('Login successful');
                setShowSuccessBanner(true);
                setTimeout(() => {
                    navigate('/student/intro');
                }, 2000);
            } else {
                setMessage('Invalid credentials');
                setShowErrorBanner(true);
            }
        } catch (error) {
            setMessage('Error during login');
            setShowErrorBanner(true);
            console.error('Error during login:', error);
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
            <Header />
            <MainSection>
                <FormContainer>
                    <Title>Welcome to Unify!</Title>
                    <Subtitle>Log in to your account to get started.</Subtitle>
                    <Form onSubmit={handleSubmit}>
                        <InputField
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
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
                        <SubmitButton type="submit" disabled={isLoading}>
                            {isLoading ? <ClipLoader color={'#fff'} loading={true} size={24} /> : 'Login'}
                        </SubmitButton>
                    </Form>
                    <CustomLink>
                        Don't have an account? <Link to="/register">Register Here</Link>
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

export default LoginPage;
