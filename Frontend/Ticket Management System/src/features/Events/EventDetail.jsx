import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

function EventDetail({ icon, detail }) {
  return (
    <Container>
      {icon}
      <span>{detail}</span>
    </Container>
  );
}

EventDetail.propTypes = {
  icon: PropTypes.node,
  detail: PropTypes.string,
};

export default EventDetail;
