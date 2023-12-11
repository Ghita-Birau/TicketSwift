import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-gray-500);
    font-size: 1.6rem;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  justify-content: ${(props) =>
    props.isbaropen === "true" ? "center" : "flex-start"};

  transition: all 0.3s;

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-gray-200);
    color: var(--color-gray-800);
  }

  & > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-gray-500);
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-800);
  }
`;

function NavItem({ to, icon, label }) {
  return (
    <li>
      <StyledNavLink to={to}>
        {icon}
        <p>{label}</p>
      </StyledNavLink>
    </li>
  );
}

NavItem.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.string,
  isSidebarOpen: PropTypes.bool,
};

export default NavItem;
