import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  font-family: "Poppins";
  background-color: var(--color-gray-50);
  color: var(--color-gray-700);

  border-radius: 10px;
  overflow: hidden;
  max-width: 90rem;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const FormContainer = styled.div`
  padding: 1.5rem 2.4rem;
  letter-spacing: -0.5px;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

function AuthWrapper({ children }) {
  return (
    <StyledDiv>
      <FormContainer>{children}</FormContainer>
    </StyledDiv>
  );
}

AuthWrapper.propTypes = {
  imageContent: PropTypes.node,
  children: PropTypes.node,
  contentPosition: PropTypes.string,
};

export default AuthWrapper;
