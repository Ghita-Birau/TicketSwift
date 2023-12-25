import { cloneElement, createContext, useContext, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

import PropTypes from "prop-types";
import styled from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";

const Container = styled.div`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  box-shadow: var(--shadow-md);
  border-radius: 8px;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-filter);
  backdrop-filter: blur(5px);
  transition: all 0.4s;
  z-index: 1000;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 0.2rem;
  background-color: var(--color-gray-50);
  border: none;
  transition: all 0.2s;

  &:hover {
    & > svg {
      fill: var(--color-brand-400);
    }
  }

  & > svg {
    margin-top: 0.2rem;
    margin-right: 0.2rem;
    width: 2.4rem;
    height: 2.4rem;
  }

  &:focus {
    outline: none;
  }
`;

export const ModalContext = createContext();

function Modal({ children }) {
  const [windowName, setWindowName] = useState("");
  const close = () => setWindowName("");
  const open = setWindowName;

  return (
    <ModalContext.Provider value={{ windowName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Opens({ children, name }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(name) });
}

function Window({ children, name }) {
  const { close, windowName } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (windowName !== name) return null;

  return (
    <Overlay>
      <Container>
        <div ref={ref}>{children}</div>
        <StyledButton onClick={() => close()}>
          <HiMiniXMark />
        </StyledButton>
      </Container>
    </Overlay>
  );
}

Modal.Opens = Opens;
Modal.Window = Window;

Modal.propTypes = {
  children: PropTypes.node,
};

Opens.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

Window.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

export default Modal;
