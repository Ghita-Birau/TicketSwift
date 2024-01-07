import Table from "../../ui/Table";
import PropTypes from "prop-types";
import OrderRow from "./OrderRow";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-gray-50);
  height: 2rem;
`;

function OrderTable({ orders }) {
  return (
    <Table role="table" columns="0.4fr 1fr 1fr 1fr 1fr 1fr 1fr">
      <Table.Header role="row">
        <div></div>
        <div>Event</div>
        <div>Category</div>
        <div>Ticket Type</div>
        <div>Price</div>
        <div>Tickets</div>
        <div>Date</div>
      </Table.Header>
      <Table.Body
        data={orders}
        render={(order) => <OrderRow order={order} key={order.orderId} />}
      />
      <StyledFooter />
    </Table>
  );
}

OrderTable.propTypes = {
  orders: PropTypes.array,
};

export default OrderTable;
