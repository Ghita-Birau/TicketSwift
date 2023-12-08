import styled from "styled-components";
import Button from "../../ui/Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const StyledInput = styled.input`
  padding: 0.8rem 1.8rem;
  flex: 1;
  border-radius: 8px;
  border: 1px solid var(--color-gray-700);
`;

function RegisterForm() {
  return (
    <StyledForm>
      <DivInput>
        <p>Email Address</p>
        <StyledInput type="text" placeholder="example@gmail.com" />
      </DivInput>
      <DivInput>
        <p>Username</p>
        <StyledInput type="text" placeholder="username" />
      </DivInput>
      <DivInput>
        <p>Password</p>
        <StyledInput type="password" placeholder="min 8 chars" />
      </DivInput>
      <Button variation="primary">Register</Button>
    </StyledForm>
  );
}

export default RegisterForm;
