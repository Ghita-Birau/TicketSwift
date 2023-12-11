import {
  HiClipboardDocumentList,
  HiOutlineTicket,
  HiHome,
} from "react-icons/hi2";

import { MdOutlineEventNote } from "react-icons/md";

import styled from "styled-components";

import MainNav from "../ui/MainNav";
import NavItem from "./NavItem";
import Logo from "./Logo";

const StyledSidebar = styled.div`
  background-color: var(--color-gray-50);
  padding: 2rem 1.8rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  grid-row: 1/3;
`;

const HeaderContainer = styled.div`
  position: relative;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <HeaderContainer>
        <Logo icon={<HiOutlineTicket />} name="TicketSwift" />
      </HeaderContainer>

      <MainNav>
        <NavItem to="/" icon={<HiHome />} label="Home" />
        <NavItem to="/events" icon={<MdOutlineEventNote />} label="Events" />
        <NavItem
          to="/orders"
          icon={<HiClipboardDocumentList />}
          label="Orders"
        />
      </MainNav>
    </StyledSidebar>
  );
}

export default Sidebar;
