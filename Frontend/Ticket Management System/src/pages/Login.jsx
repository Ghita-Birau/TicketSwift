import { useContext } from "react";
import { ModalContext } from "../ui/Modal";

import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
import Authentication from "../features/authentication/Authentication";
import styled from "styled-components";

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

function Login() {
  const { open, close } = useContext(ModalContext);

  function handleClick(e) {
    e.preventDefault();
    close();
    open("signup-form");
  }

  return (
    <Authentication
      form={<LoginForm />}
      header={
        <div>
          <Heading as="h4">Log in to your Account</Heading>
          <p>Welcome back! Select method to log in:</p>
        </div>
      }
      footer={
        <Footer>
          <span>Don&apos;t have an account? </span>
          <StyledLink onClick={handleClick}>Create an account</StyledLink>
        </Footer>
      }
    />
  );
}

export default Login;
