import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  & > span {
    font-size: 1.3rem;
    color: var(--color-error-600);
  }

  position: relative;
  min-height: 8.1rem;
`;

function FormRow({ label, children, error }) {
  return (
    <Container>
      {label && <label>{label}</label>}
      {children}
      {error && <span>{error}</span>}
    </Container>
  );
}

FormRow.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  error: PropTypes.string,
};

export default FormRow;
