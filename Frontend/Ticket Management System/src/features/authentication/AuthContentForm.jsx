import { useForm } from "react-hook-form";

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

function AuthContentForm({ onSubmit, elements, buttonLabel }) {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmitFinal(data, e) {
    onSubmit(data, e);
    reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitFinal)}>
      {elements.map((element) => {
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
              />
              {element.icon}
            </InputContainer>
            {element?.otherChildren}
          </FormRow>
        );
      })}
      <Button variation="primary">{buttonLabel}</Button>
    </StyledForm>
  );
}

AuthContentForm.propTypes = {
  onSubmit: PropTypes.func,
  register: PropTypes.func,
  elements: PropTypes.array,
  buttonLabel: PropTypes.string,
};

export default AuthContentForm;
