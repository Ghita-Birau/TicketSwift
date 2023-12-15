import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

import styled from "styled-components";
import Heading from "../../ui/Heading";

const Container = styled.div`
  background-color: var(--color-gray-0);
  padding: 1.2rem 2rem;
  transition: all 0.2s;
  color: var(--color-gray-600);
`;

const Row = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  & > span > svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    & > span > svg {
      color: var(--color-brand-500);
    }
  }
`;

function PriceFilter() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Row onClick={() => setIsOpen((o) => !o)}>
        <Heading as="h5">Price</Heading>
        <span>{isOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
      </Row>
    </Container>
  );
}

export default PriceFilter;
