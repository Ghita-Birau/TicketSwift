import { HiMiniTrash } from "react-icons/hi2";
import { useContext } from "react";
import { ModalContext } from "./Modal";

import PropTypes from "prop-types";
import Heading from "./Heading";
import Button from "./Button";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--color-gray-50);
  padding: 1.4rem 2.4rem;
  border-radius: 8px;
  font-size: 1.6rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > main {
    align-self: flex-end;

    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & > p {
    align-self: flex-start;
    margin-bottom: 1rem;
  }
`;

const IconContainer = styled.div`
  background-color: var(--color-gray-200);
  border-radius: 45%;
  min-width: 6rem;
  min-height: 5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 3rem;
    height: 3rem;
    position: relative;
    z-index: 1;
    fill: var(--color-gray-700);
  }
`;

function ConfirmDelete({ resource, onClickDelete }) {
  const { close } = useContext(ModalContext);

  return (
    <Container>
      <IconContainer>
        <HiMiniTrash />
      </IconContainer>
      <Heading as="h5">Delete {resource}</Heading>
      <p>
        Are you sure you want to delete this <span>{resource}?</span>
      </p>
      <main>
        <Button variation="cancel" onClick={() => close()}>
          Cancel
        </Button>
        <Button variation="danger" onClick={onClickDelete}>
          Delete
        </Button>
      </main>
    </Container>
  );
}

ConfirmDelete.propTypes = {
  resource: PropTypes.string,
  onClickDelete: PropTypes.func,
};

export default ConfirmDelete;
