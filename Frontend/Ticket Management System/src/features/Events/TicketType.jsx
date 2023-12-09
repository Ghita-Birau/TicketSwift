import { formatCurrency } from "../../utils/helpers";
import { HiMiniNoSymbol } from "react-icons/hi2";

import styled from "styled-components";
import Button from "../../ui/Button";
import PropTypes from "prop-types";

const Container = styled.div`
  color: var(--color-gray-600);
  padding: 1.2rem 2rem;
  font-size: 1.6rem;
  background-color: var(--color-gray-50);
  border-radius: 8px;
`;

const StyledHeader = styled.header`
  border-bottom: 1px solid var(--color-gray-200);
  padding-bottom: 0.6rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;

  & > p {
    font-size: 1.4rem;
  }

  & > header {
    font-weight: 600;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > p {
    font-weight: 600;
  }
`;

const StyledCaracteristic = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

function TicketType({ category }) {
  const { description, price } = category;

  return (
    <Container>
      <StyledHeader>{description} Ticket</StyledHeader>
      <StyledMain>
        <StyledSection>
          <header>Access</header>
        </StyledSection>
        <StyledSection>
          <header>Fare Rules</header>
          <StyledCaracteristic>
            <HiMiniNoSymbol />
            <span>Non-refundable</span>
          </StyledCaracteristic>
        </StyledSection>
      </StyledMain>
      <StyledFooter>
        <p>{formatCurrency(price)}</p>
        <Button>Add to cart</Button>
      </StyledFooter>
    </Container>
  );
}

TicketType.propTypes = {
  category: PropTypes.object,
};

export default TicketType;
