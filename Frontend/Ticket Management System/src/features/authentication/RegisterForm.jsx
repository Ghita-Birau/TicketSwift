import { useForm } from "react-hook-form";
import { HiCalendar, HiOutlineMail } from "react-icons/hi";
import {
  HiDevicePhoneMobile,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineLockClosed,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { useState } from "react";
import { GrLocationPin } from "react-icons/gr";

import AuthContentForm from "./AuthContentForm";
import styled from "styled-components";
import useRegister from "./useRegister";
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

function RegisterForm() {
  const [isShowing, setIsShowing] = useState(false);
  const { register, isLoading } = useRegister();
  const { reset } = useForm();
  const navigate = useNavigate();

  function togglePassword(e) {
    e.preventDefault();
    setIsShowing((is) => !is);
  }

  function handleDateChange(e) {
    let value = e.target.value;

    value = value.replace(/\D/g, "").substring(0, 8);

    // Adaugă slash-uri
    if (value.length > 2 && value.length <= 4) {
      value = value.substring(0, 2) + "/" + value.substring(2);
    } else if (value.length > 4) {
      value =
        value.substring(0, 2) +
        "/" +
        value.substring(2, 4) +
        "/" +
        value.substring(4);
    }

    e.target.value = value;
  }

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
      label: "Username",
      name: "username",
      type: "text",
      placeholder: "username",
      icon: <HiOutlineUserCircle />,
      validation: {
        required: "This field is required",
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
          {isShowing ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
        </StyledButton>
      ),
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "City Street Postal Code....",
      icon: <GrLocationPin />,
      validation: {
        required: "This field is required",
      },
    },

    {
      label: "Birth Date",
      name: "birthdate",
      type: "text",
      placeholder: "dd/mm/yyyy",
      icon: <HiCalendar />,
      onChange: handleDateChange,
      validation: {
        required: "This field is required",
        validate: (value) => {
          const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
          if (!dateRegex.test(value)) {
            return "Invalid date format. Please use dd/mm/yyyy";
          }

          const [day, month, year] = value.split("/");
          const parsedDate = new Date(`${year}-${month}-${day}T00:00:00`);

          if (isNaN(parsedDate.getTime())) {
            return "Invalid date. Please enter a valid date.";
          }

          const currentDate = new Date();
          if (parsedDate > currentDate) {
            return "Date of birth cannot be in the future.";
          }

          return true;
        },
      },
    },
    {
      label: "Phone",
      name: "phone",
      type: "text",
      placeholder: "12345678910",
      icon: <HiDevicePhoneMobile />,
      validation: {
        required: "This field is required",
        validate: (value) => {
          const phoneRegex = /^\d{10}$/;
          if (!phoneRegex.test(value)) {
            return "Invalid phone number. Please enter 10 digits.";
          }
          return true;
        },
      },
      maxLength: 10,
    },
  ];

  function onSubmit(data, e) {
    e.preventDefault();

    const parts = data.birthdate.split("/");
    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

    register(
      {
        name: data.username,
        userEmail: data.email,
        password: data.password,
        dateOfBirth: formattedDate,
        address: data.address,
        phoneNumber: data.phone,
      },
      { onSuccess: () => navigate("/login") }
    );

    reset();
  }

  if (isLoading) return <Loader />;

  return (
    <AuthContentForm
      onSubmit={onSubmit}
      elements={elements}
      buttonLabel="Register"
      elementsPerPage={3}
    />
  );
}

export default RegisterForm;
