import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { ModalContext } from "../../ui/Modal";

import styled from "styled-components";
import PropTypes from "prop-types";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const StyledInput = styled.input`
  padding: 0.8rem 3rem;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--color-gray-700);
`;

const InputContainer = styled.div`
  position: relative;

  & > svg {
    color: var(--color-gray-500);
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 25%;
    left: 2%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

function AuthContentForm({ onSubmit, elements, buttonLabel, elementsPerPage }) {
  const { register, handleSubmit, formState, reset } = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleElements, setVisibleElements] = useState(
    elements.slice(0, elementsPerPage)
  );
  const { errors } = formState;
  const { close } = useContext(ModalContext);

  function handleBack() {
    setCurrentPage(1);
    setVisibleElements(elements.slice(0, elementsPerPage));
  }

  function onSubmitFinal(data, e) {
    const allowNext = Object.values(data).every((value) => value !== null);
    if (currentPage * elementsPerPage >= elements.length) {
      onSubmit(data, e);
      reset();
      close();
    }

    if (allowNext && currentPage * elementsPerPage < elements.length) {
      setCurrentPage(currentPage + 1);
      const start = currentPage * elementsPerPage;
      const end = start + elementsPerPage;
      setVisibleElements(elements.slice(start, end));
    }
  }

  useEffect(() => {
    setCurrentPage(1);
    setVisibleElements(elements.slice(0, elementsPerPage));
  }, [elements, elementsPerPage]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitFinal)}>
      {visibleElements.map((element) => {
        return (
          <FormRow
            label={element.label}
            error={errors?.[element.name]?.message}
            key={element.name}
          >
            <InputContainer>
              <StyledInput
                type={element.type}
                placeholder={element.placeholder}
                {...register(element.name.toLowerCase(), element.validation)}
                maxLength={element?.maxLength}
                onChange={
                  element.onChange &&
                  ((e) => {
                    element.onChange(e);
                  })
                }
              />
              {element.icon}
            </InputContainer>
            {element?.otherChildren}
          </FormRow>
        );
      })}
      {currentPage * elementsPerPage < elements.length &&
        elementsPerPage > 2 && <Button type="button">Next Step</Button>}
      {currentPage * elementsPerPage >= elements.length &&
        elementsPerPage > 2 && (
          <ButtonsContainer>
            <Button
              variation="secondary"
              icon={<HiArrowLeft />}
              onClick={handleBack}
            />
            <Button type="submit" variation="primaryW100">
              {buttonLabel}
            </Button>
          </ButtonsContainer>
        )}
      {elementsPerPage === 2 && (
        <Button type="submit" variation="primary">
          {buttonLabel}
        </Button>
      )}
    </StyledForm>
  );
}

AuthContentForm.propTypes = {
  onSubmit: PropTypes.func,
  register: PropTypes.func,
  elements: PropTypes.array,
  buttonLabel: PropTypes.string,
  elementsPerPage: PropTypes.number,
};

export default AuthContentForm;
