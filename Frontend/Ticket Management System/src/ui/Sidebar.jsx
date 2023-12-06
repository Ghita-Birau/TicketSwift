import styled, { css } from "styled-components";
import {
  HiCubeTransparent,
  HiOutlineSquares2X2,
  HiOutlineUser,
} from "react-icons/hi2";

import MainNav from "../ui/MainNav";
import NavItem from "./NavItem";

const StyledSidebar = styled.div`
  background-color: var(--color-gray-50);
  padding: 2rem 1.8rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  grid-row: 1/3;
`;

const SidebarHeader = styled.header`
  color: var(--color-gray-700);
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1.5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  /* transition: all 0.3s; */

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

const HeaderContainer = styled.div`
  position: relative;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <HeaderContainer>
        <SidebarHeader>
          <HiCubeTransparent />
          <span>StaffHub</span>
        </SidebarHeader>
      </HeaderContainer>

      <MainNav>
        <NavItem to="/" icon={<HiOutlineSquares2X2 />} label="Dashboard" />
        <NavItem to="/orders" icon={<HiOutlineUser />} label="Orders" />
      </MainNav>
    </StyledSidebar>
  );
}

export default Sidebar;
