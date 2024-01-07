import { Outlet } from "react-router-dom";

import styled, { css } from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Modal from "./Modal";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const StyledDiv = styled.div`
  height: 100vh;
  font-size: 2rem;
  color: var(--color-gray-700);

  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  transition: all 0.4s;

  ${(props) =>
    props.isbaropen === "true" &&
    css`
      grid-template-columns: 10rem 1fr;
    `}
`;

const StyledMain = styled.main`
  background-color: var(--color-gray-100);
  overflow: scroll;
  border: 1px solid var(--color-gray-200);

  /* border-radius: 8px; */

  padding: 1.2rem 2rem;
`;

function AppLayout() {
  return (
    <StyledDiv>
      <Header />
      <Sidebar />
      <StyledMain>
        <Outlet />
        <Modal.Window name="login-form">
          <Login />
        </Modal.Window>
        <Modal.Window name="signup-form">
          <Signup />
        </Modal.Window>
      </StyledMain>
    </StyledDiv>
  );
}

export default AppLayout;
