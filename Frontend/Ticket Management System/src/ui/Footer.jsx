import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/Constants";

import styled, { css } from "styled-components";
import PropTypes from "prop-types";

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

  ${(props) =>
    !props.isdisabled &&
    css`
      &:hover {
        color: var(--color-gray-50);
        border-radius: 8px;
        background-color: var(--color-brand-600);
      }
    `}
`;

function Footer({ count = 0 }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || 0;

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function handleNext() {
    searchParams.set(
      "page",
      Number(currentPage) === pageCount - 1
        ? pageCount
        : Number(currentPage) + 1
    );
    setSearchParams(searchParams);
  }

  function handlePrevious() {
    searchParams.set(
      "page",
      Number(currentPage) === 0 ? 0 : Number(currentPage) - 1
    );
    setSearchParams(searchParams);
  }

  if (count < PAGE_SIZE) return null;

  return (
    <Container>
      <p>
        Showing <span>{Number(currentPage) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {Number(currentPage) + 1 * PAGE_SIZE > count
            ? count
            : (Number(currentPage) + 1) * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>
      <ButtonContainer>
        <StyledButton
          onClick={handlePrevious}
          isdisabled={Number(currentPage) === 0}
          disabled={Number(currentPage) === 0}
        >
          {<HiChevronLeft />} Previous
        </StyledButton>
        <StyledButton
          onClick={handleNext}
          isdisabled={Number(currentPage) === pageCount - 1}
          disabled={Number(currentPage) === pageCount - 1}
        >
          Next
          {<HiChevronRight />}
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
}

Footer.propTypes = {
  count: PropTypes.number,
};

export default Footer;
