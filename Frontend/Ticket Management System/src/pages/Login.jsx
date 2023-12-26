import { NavLink } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa6";

import AuthWrapper from "../ui/AuthWrapper";

import styled from "styled-components";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";

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

function Login() {
  return (
    <AuthWrapper
      imageContent={
        <div>
          <img alt="idk" />
        </div>
      }
      contentPosition="left"
    >
      <div>
        <Heading as="h4">Log in to your Account</Heading>
        <p>Welcome back! Select method to log in:</p>
      </div>
      <ButtonContainer>
        <StyledButtons>
          <FaGoogle />
          <span>Login with Google</span>
        </StyledButtons>
        <StyledButtons>
          <FaFacebook />
          <span>Login with Facebook</span>
        </StyledButtons>
      </ButtonContainer>
      <Divider>
        <DividerText>or</DividerText>
      </Divider>
      <LoginForm />
      <Footer>
        <span>Don&apos;t have an account? </span>
        <StyledNavlink to="/signup">Create an account</StyledNavlink>
      </Footer>
    </AuthWrapper>
  );
}

export default Login;
