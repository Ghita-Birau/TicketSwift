import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import {
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineLockClosed,
} from "react-icons/hi2";
import { useCallback, useState } from "react";

import AuthContentForm from "./AuthContentForm";
import styled from "styled-components";
import useLogin from "./useLogin";
import Loader from "../../ui/Loader";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 30%;
  right: 2%;
  transform: translate(0, -10%);

  padding: 0.8rem;

  & > svg {
    width: 2.2rem;
    height: 2.2rem;
    stroke: var(--color-gray-600);

    &:hover {
      stroke: var(--color-brand-600);
    }
  }

  &:focus {
    outline: none;
  }
`;

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function LoginForm() {
  const [isShowing, setIsShowing] = useState(false);
  const { login, isLoading } = useLogin();
  const { reset } = useForm();
  const navigate = useNavigate();

  const togglePassword = useCallback((e) => {
    e.preventDefault();
    setIsShowing((prevIsShowing) => !prevIsShowing);
  }, []);

  const elements = [
    {
      label: "Email Address",
      name: "email",
      type: "text",
      placeholder: "Email",
      icon: <HiOutlineMail />,
      validation: {
        required: "This field is required",
        pattern: {
          value: emailRegex,
          message: "Invalid email address",
        },
      },
    },
    {
      label: "Password",
      name: "password",
      type: isShowing ? "text" : "password",
      placeholder: "password",
      icon: <HiOutlineLockClosed />,
      validation: {
        required: "This field is required",
        validate: (value) => {
          if (value.length < 2) {
            return "Invalid number of characters";
          }
          return true;
        },
      },
      otherChildren: (
        <StyledButton onClick={togglePassword}>
          {isShowing ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
        </StyledButton>
      ),
    },
  ];

  function onSubmit(data, e) {
    e.preventDefault();
    login(
      { email: data.email, password: data.password },
      { onSuccess: () => navigate("/") }
    );
    reset();
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AuthContentForm
      onSubmit={onSubmit}
      elements={elements}
      buttonLabel="Login"
      elementsPerPage={2}
    />
  );
}

export default LoginForm;
