import { useNavigate } from "react-router-dom";

import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
import Authentication from "../features/authentication/Authentication";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

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
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <Container>
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
    </Container>
  );
}

export default Login;
