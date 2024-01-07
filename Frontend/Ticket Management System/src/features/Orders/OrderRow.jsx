import { formatCurrency, formatDate } from "../../utils/helpers";

import PropTypes from "prop-types";
import styled from "styled-components";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const NameCont = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const StyledSpan = styled.span`
  padding-left: 2rem;
`;

function OrderRow({ order }) {
  const {
    eventName: name,
    urlImage: image,
    numberOfTickets,
    orderedAt: date,
    totalPrice: price,
    ticketCategoryDescription: ticketType,
    eventTypeName: category,
  } = order;

  const statusToTagName = {
    Music: "blue",
    Sport: "green",
    Gastronomy: "silver",
  };

  const StyledDiv = styled.div`
    font-weight: 600;
    color: var(--color-gray-500);
  `;
  return (
    <Table.Row>
      <Img src={image} />
      <NameCont>{name}</NameCont>

      <Tag type={statusToTagName[category]}>{category}</Tag>

      <StyledDiv>{ticketType}</StyledDiv>
      <Price>
        <strong>{formatCurrency(price)}</strong>
      </Price>
      <StyledSpan>
        <strong>{numberOfTickets}</strong>
      </StyledSpan>
      <StyledDiv>{formatDate(date)}</StyledDiv>
    </Table.Row>
  );
}

OrderRow.propTypes = {
  order: PropTypes.object,
};

export default OrderRow;
