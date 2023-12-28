import { useContext } from "react";
import { ModalContext } from "../ui/Modal";

import styled from "styled-components";
import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/RegisterForm";
import Authentication from "../features/authentication/Authentication";

const Footer = styled.div`
  text-align: center;
`;

const StyledLink = styled.a`
  color: var(--color-brand-600);
  cursor: pointer;

  &:link,
  &:visited {
    text-decoration: none;
  }

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

function Signup() {
  const { open, close } = useContext(ModalContext);

  function handleClick(e) {
    e.preventDefault();
    close();
    open("login-form");
  }

  return (
    <Authentication
      form={<SignupForm />}
      header={
        <div>
          <Heading as="h4">Get Started Now</Heading>
          <p>Enter your credentials to access your account</p>
        </div>
      }
      footer={
        <Footer>
          <span>Already a member? </span>
          <StyledLink onClick={handleClick}>Login</StyledLink>
        </Footer>
      }
    />
  );
}

export default Signup;
