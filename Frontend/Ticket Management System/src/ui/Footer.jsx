import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--color-gray-50);
  padding: 1.2rem 2.4rem;
  border-radius: 0px 0px 0px 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledButton = styled.button`
  background-color: var(--color-gray-50);
  display: flex;
  align-items: center;
  border: none;
  border-radius: 8px;
  padding: 1rem 1.6rem;
  transition: all 0.2s;

  &:hover {
    color: var(--color-gray-50);
    border-radius: 8px;
    background-color: var(--color-brand-600);
  }
`;

function Footer() {
  return (
    <Container>
      <p>
        Showing <strong>1</strong> to <strong>10</strong> of <strong>24</strong>{" "}
        results
      </p>
      <ButtonContainer>
        <StyledButton>{<HiChevronLeft />} Previous</StyledButton>
        <StyledButton>
          Next
          {<HiChevronRight />}
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
}

export default Footer;
