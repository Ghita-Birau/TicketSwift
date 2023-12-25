import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHasDiscount, turnOnPrice } from "../../../contexts/filterSlice";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

import Heading from "../../../ui/Heading";
import PriceSlider from "./PriceSlider";
import Checkbox from "../../../ui/Checkbox";
import HeaderRow from "../../../ui/HeaderRow";
import FilterContainer from "../../../ui/FilterContainer";
import styled from "styled-components";

const Container = styled(FilterContainer)`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 0 1.2rem;
  }
`;

function PriceFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const isOn = useSelector((store) => store.filters.price.isOn);
  const hasDiscount = useSelector((store) => store.filters.hasDiscount);
  const dispatch = useDispatch();

  function handleChange() {
    dispatch(turnOnPrice(!isOn));
  }

  function handleDiscountChange() {
    dispatch(toggleHasDiscount(!hasDiscount));
  }

  return (
    <Container>
      <HeaderRow onClick={() => setIsOpen((o) => !o)}>
        <Heading as="h4">Price</Heading>
        <span>{isOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
      </HeaderRow>

      {isOpen && (
        <div>
          <Checkbox
            label="Discount"
            isChecked={hasDiscount}
            onChange={handleDiscountChange}
          />
          <Checkbox label="Interval" isChecked={isOn} onChange={handleChange} />
          <PriceSlider />
        </div>
      )}
    </Container>
  );
}

export default PriceFilter;
