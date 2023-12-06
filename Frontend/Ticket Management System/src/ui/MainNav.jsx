import styled from "styled-components";
import PropTypes from "prop-types";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function MainNav({ children }) {
  return (
    <nav>
      <StyledList>{children}</StyledList>
    </nav>
  );
}

MainNav.propTypes = {
  children: PropTypes.node,
};

export default MainNav;
