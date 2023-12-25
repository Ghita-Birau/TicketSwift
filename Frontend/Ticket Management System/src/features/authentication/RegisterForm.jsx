import { useForm } from "react-hook-form";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { useState } from "react";

import styled from "styled-components";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const StyledInput = styled.input`
  padding: 0.8rem 1.8rem;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--color-gray-700);
`;

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

function RegisterForm() {
  const [isShowing, setIsShowing] = useState(false);
  const { register, formState, handleSubmit, getValues, reset } = useForm();
  const { errors } = formState;

  function togglePassword(e) {
    e.preventDefault();
    setIsShowing((is) => !is);
  }

  function onSubmit(data, e) {
    e.preventDefault();
    console.log(data);
    reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Email Address" error={errors?.email?.message}>
        <StyledInput
          type="text"
          placeholder="example@gmail.com"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: emailRegex,
              message: "Invalid email address",
            },
          })}
        />
      </FormRow>
      <FormRow label="Username" error={errors?.username?.message}>
        <StyledInput
          type="text"
          placeholder="username"
          {...register("username", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Password" error={errors?.password?.message}>
        <StyledInput
          type={isShowing ? "text" : "password"}
          placeholder="min 8 chars"
          {...register("password", {
            required: "This field is required",
            validate: () => {
              const password = getValues("password");
              if (password.length < 8) {
                return "Invalid number of characters";
              }
              return true;
            },
          })}
        />
        <StyledButton onClick={togglePassword}>
          {isShowing ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
        </StyledButton>
      </FormRow>
      <Button variation="primary">Register</Button>
    </StyledForm>
  );
}

export default RegisterForm;
