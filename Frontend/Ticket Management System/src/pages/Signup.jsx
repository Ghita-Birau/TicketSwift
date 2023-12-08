import { FaFacebook, FaGoogle } from "react-icons/fa6";

import styled from "styled-components";
import Heading from "../ui/Heading";
import RegisterForm from "../features/authentication/RegisterForm";
import { NavLink } from "react-router-dom";

const StyledDiv = styled.div`
  font-family: "Poppins";
  background-color: var(--color-gray-50);
  border-radius: 10px;
  color: var(--color-gray-700);

  max-width: 90rem;
  min-height: 58rem;

  margin: auto;
  margin-top: 6rem;
  padding: 1rem;

  display: grid;
  grid-template-columns: 2fr 1.5fr;
  column-gap: 2.8rem;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const ImageContainer = styled.div`
  background-color: var(--color-brand-700);
  border-radius: 8px;
`;

const FormContainer = styled.div`
  padding: 1.5rem 2.4rem;
  letter-spacing: -0.5px;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledButtons = styled.button`
  background-color: var(--color-gray-50);
  border: 1px solid var(--color-gray-900);
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
    background-color: var(--color-gray-700);
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
  text-decoration: underline;
  color: var(--color-brand-600);
`;

function Signup() {
  return (
    <StyledDiv>
      <ImageContainer>Image</ImageContainer>
      <FormContainer>
        <div>
          <Heading as="h4">Get Started Now</Heading>
          <p>Enter your credentials to access your account</p>
        </div>
        <ButtonContainer>
          <StyledButtons>
            <FaGoogle />
            <span>Login with Google</span>
          </StyledButtons>
          <StyledButtons>
            <FaFacebook />
            <span>Log in with Facebook</span>
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
      </FormContainer>
    </StyledDiv>
  );
}

export default Signup;
