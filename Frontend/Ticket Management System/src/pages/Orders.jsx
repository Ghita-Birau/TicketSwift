import styled from "styled-components";
import OrderTable from "../features/Orders/OrderTable";
import Heading from "../ui/Heading";
import useOrders from "../features/Orders/useOrders";
import Loader from "../ui/Loader";
// import NotAccessible from "../features/Orders/NotAccessible";

const StyledContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > header {
    text-align: center;
  }
`;

function Orders() {
  const { orders, isLoading } = useOrders();

  if (isLoading) return <Loader />;

  return (
    <StyledContainer>
      <header>
        <Heading as="h2">All Orders</Heading>
      </header>
      <OrderTable orders={orders} />
    </StyledContainer>
  );
}

export default Orders;
