import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const SidebarHeader = styled.header`
  color: var(--color-gray-700);
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1.5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s;

  & svg {
    width: 6rem;
    height: 6rem;
    color: var(--color-brand-600);
    ${(props) =>
      props.isbaropen === "true" &&
      css`
        width: 4rem;
        height: 4rem;
      `};
  }
`;

function Logo({ icon, name }) {
  return (
    <SidebarHeader>
      {icon}
      <span>{name}</span>
    </SidebarHeader>
  );
}

Logo.propTypes = {
  icon: PropTypes.element,
  name: PropTypes.string,
};

export default Logo;
