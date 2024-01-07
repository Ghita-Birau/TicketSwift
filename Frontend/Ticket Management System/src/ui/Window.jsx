import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createPortal } from "react-dom";

import PropTypes from "prop-types";
import styled from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";

const StyledToggle = styled.div`
  background: none;
  border: none;
  /* padding: 0.4rem; */
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledContainer = styled.div`
  outline: none;
`;
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1000;

  background-color: var(--color-gray-100);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  right: ${(props) => props?.position?.x}px;
  top: ${(props) => props?.position?.y}px;
`;

export const WindowContext = createContext();

function Window({ children }) {
  const [openName, setOpenName] = useState(null);
  const [position, setPosition] = useState(null);

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <WindowContext.Provider
      value={{
        open,
        openName,
        position,
        close,
        setPosition,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
}

function WindowContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

function Toggle({ name, children }) {
  const { open, close, openName, setPosition } = useContext(WindowContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    openName === "" || openName !== name ? open(name) : close();
  }
  return <StyledToggle onClick={handleClick}>{children}</StyledToggle>;
}

function Body({ children, name }) {
  const { openName, position, close } = useContext(WindowContext);
  const ref = useOutsideClick(close, false);

  if (openName !== name) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}

Window.Container = WindowContainer;
Window.Toggle = Toggle;
Window.Body = Body;

Window.propTypes = {
  children: PropTypes.node,
};

WindowContainer.propTypes = {
  children: PropTypes.node,
};

Toggle.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
};

Body.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

export default Window;
