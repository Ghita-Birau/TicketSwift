import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../../ui/Button";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0rem 0rem 0rem;
  gap: 1rem;

  & > span {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.6rem;
  }

  & > p {
    font-size: 1.6rem;
    font-weight: 600;
  }

  & > h3 {
    text-transform: uppercase;
  }
`;

function PriceDetail({ isOpen, minPrice, maxPrice, toggleOpen }) {
  return (
    <Container>
      {!isOpen && (
        <p>
          <span>{formatCurrency(minPrice, 0)}</span> &mdash;{" "}
          <span>{formatCurrency(maxPrice, 0)}</span>
        </p>
      )}

      <Button
        onClick={toggleOpen}
        variation={isOpen ? "secondary" : "primary"}
        icon={isOpen ? <HiChevronUp /> : <HiChevronDown />}
      >
        {isOpen ? "Hide" : "Select"}
      </Button>
    </Container>
  );
}

PriceDetail.propTypes = {
  isOpen: PropTypes.bool,
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  toggleOpen: PropTypes.func,
};

export default PriceDetail;
