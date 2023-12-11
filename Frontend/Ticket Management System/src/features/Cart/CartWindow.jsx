import { useSelector } from "react-redux";

import styled from "styled-components";
import EmptyCart from "./EmptyCart";

const StyledMain = styled.main`
  padding: 1.2rem 2rem;
  font-size: 1.4rem;
`;

function CartWindow() {
  const cart = useSelector((store) => store.cart);
  return <StyledMain>{cart.length === 0 && <EmptyCart />}</StyledMain>;
}

export default CartWindow;
