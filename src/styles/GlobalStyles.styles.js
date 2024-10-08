import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

// Fade-in animation for general use
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Main wrapper for the page
export const Wrapper = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f8f9fa;
`;

// Main section to center content
export const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically */
  flex-grow: 1;
  padding: 25px;
  overflow-y: auto;
`;

// Container for the form
export const FormContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 2.5%;
  max-width: 450px;
  width: 100%;
  animation: ${fadeIn} 0.5s ease-out;
`;

// Title for the form
export const Title = styled.h2`
  font-size: 36px; /* Increased font size for a fancy look */
  font-family: 'Poppins', sans-serif; /* Use the new font */
  margin-bottom: 15px;
  color: #333;
  text-align: center;
  text-transform: uppercase; /* Uppercase for elegance */
`;

// Subtitle for the form
export const Subtitle = styled.p`
  font-size: 20px; /* Increased font size for better visibility */
  font-family: 'Poppins', sans-serif; /* Use the new font */
  color: #666;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 600; /* Semi-bold for emphasis */
`;

// Form styling
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// Input field styling
export const InputField = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  border: 2px solid #ced4da;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #80bdff;
    outline: none;
  }
`;

// Submit button styling
export const SubmitButton = styled.button`
  background-color: #1f2937;
  color: white;
  padding: 15px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;

  &:hover {
    background-color: #111827;
    transform: translateY(-3px);
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

// Error banner styling
export const ErrorBanner = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 15px;
  margin-top: 20px;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  position: relative;
`;

// Success banner styling
export const SuccessBanner = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 15px;
  margin-top: 20px;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  position: relative;
`;

// Close button for banners
export const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: inherit;
  font-size: 16px;
  cursor: pointer;
`;

// Header container styling
export const HeaderContainer = styled.header`
  background-color: #1f2937;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center; /* Center text */
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

// Animated text styling
export const AnimatedText = styled.h1`
  font-size: 30px; /* Adjust font size as needed */
  font-family: 'Poppins', sans-serif; /* Use the new font */
  animation: ${fadeIn} 0.8s ease-out; /* Apply animation */
  
  @media (max-width: 768px) {
    font-size: 28px; /* Smaller font size for mobile */
  }
`;

export const DashboardLayout = styled.div`
  display: flex;
  height: calc(100vh - 85px);; /* Make sure the main layout takes full height */
  overflow: hidden; /* Prevent overflow from content */
`;

export const SidebarContainer = styled.nav`
  width: 250px;
  background-color: #111827;
  padding: 30px 20px;
  color: #e5e7eb;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  position: fixed; /* Ensure it stays in the same position */
  top: 0; /* Start from the top */
  left: 0;
  height: 100vh; /* Set height to viewport height */
  overflow-y: auto; /* Allow vertical scroll if needed */
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;
  z-index: 1000;

  @media (min-width: 769px) {
    position: static; /* Change positioning for larger screens */
    transform: translateX(0); /* Always show on larger screens */
    height: auto; /* Reset height for non-fixed sidebar */
  }
`;

export const SectionHeading = styled.h3`
  font-size: 1.1rem;
  color: #9ca3af;
  margin-bottom: 20px;
  margin-top: 40px;
  padding-left: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #e5e7eb;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #374151;
    color: #ffffff;
  }

  &.active {
    background-color: #2563eb;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  padding: 40px 60px; /* Padding remains the same */
  margin: 25px;
  width: 100%; /* Adjust width to 80% of the screen */
  max-width: 1450px; /* Limit the maximum width */
  height: auto; /* Auto height to adapt to content */
  min-height: 730px; /* Minimum height to ensure consistent layout */
  text-align: left; /* Left-align text for better readability */
  position: relative;
  z-index: 2;
  opacity: 0.95;

  /* Responsive behavior for smaller screens */
  @media (max-width: 1200px) {
    width: 90%; /* Slightly increase the width for medium screens */
  }

  @media (max-width: 768px) {
    width: 95%; /* Take more width on smaller screens */
    padding: 30px 40px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width on very small screens */
    padding: 20px 30px; /* Reduce padding further */
  }
`;

export const CardTitle = styled.h2`
  font-size: 36px;
  color: #1f2937;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center; /* Center the title for emphasis */
`;

export const CardSubtitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  text-align: center; /* Center the subtitle for emphasis */
`;

export const CardHeading = styled.h4`
  font-size: 22px;
  color: #1f2937;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const CardContent = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6; /* Increased line height for better readability */
  margin-bottom: 20px;
`;

export const ProfileForm = styled.form`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns for side-by-side fields */
    gap: 40px; /* Space between fields */
    width: 100vw; /* Full viewport width */
    padding: 0 20px; /* Add horizontal padding to prevent fields from touching edges */
    box-sizing: border-box; /* Include padding in the total width */
    max-width: 1200px; /* Set a max width for larger screens */
    margin: 50px auto; /* Center the form with auto margins */

    @media (max-width: 600px) {
        grid-template-columns: 1fr; /* Stack fields on small screens */
        gap: 20px; /* Reduce gap on smaller screens */
    }
`;

export const FormField = styled.div`
    margin-bottom: 2px;
`;

export const Label = styled.label`
    font-weight: bold;
    margin-bottom: 5px;
    display: block; /* Make label block to occupy full width */
`;

export const Input = styled.input`
    width: 100%; /* Full width of the parent */
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    transition: border-color 0.3s;

    &:focus {
        border-color: #1f2937;
        outline: none;
    }
`;

export const AddressInput = styled.input`
    width: 207%; /* Use full width of the parent */
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    transition: border-color 0.3s;

    &:focus {
        border-color: #1f2937;
        outline: none;
    }
`;

export const Select = styled.select`
    width: 103.5%; /* Use full width of the parent */
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff; /* White background */
    transition: border-color 0.3s;

    &:focus {
        border-color: #1f2937;
        outline: none;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end; /* Align buttons to the right */
    gap: 20px;
    margin-top: 60px; /* Space above the buttons */
    margin-right: 6%
`;

export const ActionButton = styled.button`
    background-color: #1f2937;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: 10px; /* Space between buttons */

    &:hover {
        background-color: #111827;
    }
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden; /* Ensures rounded edges are visible */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`;

export const TableRow = styled.tr`
    background-color: ${({ isEven }) => (isEven ? '#f9f9f9' : '#fff')}; /* Alternating row colors */
`;

export const TableHeader = styled.th`
    background-color: #1f2937;
    color: white;
    padding: 15px;
    text-align: left;
    font-weight: bold;
    border-bottom: 2px solid #ccc;
`;

export const TableData = styled.td`
    padding: 15px;
    border-bottom: 1px solid #eee;
    text-align: left;
`;

export const IconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    color: #1f2937;

    &:hover {
        color: #111827;
    }

    svg {
        font-size: 1.2rem;
    }
`;

export const CustomLink = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  color: #666;

  a {
    color: #1f2937;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #111827;
    }
  }
`;