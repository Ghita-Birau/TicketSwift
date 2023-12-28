import { FaFacebook, FaGoogle } from "react-icons/fa6";

import styled from "styled-components";
import AuthWrapper from "../../ui/AuthWrapper";
import PropTypes from "prop-types";

const StyledButtons = styled.button`
  background-color: var(--color-gray-50);
  border-radius: 10px;
  padding: 1rem 1.4rem;
  font-size: 1rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  & > svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover {
    background-color: var(--color-brand-600);
    color: var(--color-gray-0);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--color-gray-700);

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid var(--color-gray-600);
  }

  &::before {
    margin-right: 0.5em;
  }

  &::after {
    margin-left: 0.5em;
  }
`;

const DividerText = styled.div`
  padding: 0 10px;
`;

function Authentication({ form, header, footer }) {
  return (
    <AuthWrapper>
      {header}
      <ButtonContainer>
        <StyledButtons>
          <FaGoogle />
          <span>Login with Google</span>
        </StyledButtons>
        <StyledButtons>
          <FaFacebook />
          <span>Login with Facebook</span>
        </StyledButtons>
      </ButtonContainer>
      <Divider>
        <DividerText>or</DividerText>
      </Divider>
      {form}
      {footer}
    </AuthWrapper>
  );
}

Authentication.propTypes = {
  form: PropTypes.node,
  header: PropTypes.node,
  footer: PropTypes.node,
};

export default Authentication;
