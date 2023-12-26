import { NavLink } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa6";

import styled from "styled-components";
import AuthWrapper from "../ui/AuthWrapper";
import Heading from "../ui/Heading";
import RegisterForm from "../features/authentication/RegisterForm";

const StyledButtons = styled.button`
  background-color: var(--color-gray-50);
  border-radius: 10px;
  padding: 1rem 1.4rem;
  font-size: 1rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  & > svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover {
    background-color: var(--color-brand-600);
    color: var(--color-gray-0);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--color-gray-700);

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid var(--color-gray-600);
  }

  &::before {
    margin-right: 0.5em;
  }

  &::after {
    margin-left: 0.5em;
  }
`;

const DividerText = styled.div`
  padding: 0 10px;
`;

const Footer = styled.div`
  text-align: center;
`;

const StyledNavlink = styled(NavLink)`
  &:link,
  &:visited {
    text-decoration: none;
    color: var(--color-brand-600);
  }

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;
function Signup() {
  return (
    <AuthWrapper
      imageContent={
        <div>
          <img alt="idk" />
        </div>
      }
      contentPosition="right"
    >
      <div>
        <Heading as="h4">Get Started Now</Heading>
        <p>Enter your credentials to access your account</p>
      </div>
      <ButtonContainer>
        <StyledButtons>
          <FaGoogle />
          <span>Register with Google</span>
        </StyledButtons>
        <StyledButtons>
          <FaFacebook />
          <span>Register with Facebook</span>
        </StyledButtons>
      </ButtonContainer>
      <Divider>
        <DividerText>or</DividerText>
      </Divider>
      <RegisterForm />
      <Footer>
        <span>Already a member? </span>
        <StyledNavlink to="/login">Login</StyledNavlink>
      </Footer>
    </AuthWrapper>
  );
}

export default Signup;
