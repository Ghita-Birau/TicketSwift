import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Empty({ resource, message = "" }) {
  return (
    <Container>
      <p>No results to display for {resource}.</p>
      {message !== "" && <p>{message}</p>}
    </Container>
  );
}

Empty.propTypes = {
  resource: PropTypes.string,
  message: PropTypes.string,
};

export default Empty;
