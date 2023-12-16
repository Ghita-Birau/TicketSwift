import { useDispatch, useSelector } from "react-redux";
import { addEndDate, addStartDate } from "../../../contexts/filterSlice";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import Heading from "../../../ui/Heading";
import "./index.css";
import toast from "react-hot-toast";
import HeaderRow from "../../../ui/HeaderRow";
import FilterContainer from "../../../ui/FilterContainer";

const Container = styled(FilterContainer)`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 0rem 0rem 0.4rem 0rem;
  }
`;

const DateContaier = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1.4fr 1fr;
  column-gap: 2rem;
  max-height: 12rem;
  padding: 0 1.2rem;
  color: var(--color-gray-500);

  & > label {
    color: ${(props) => props.isactive === "true" && "var(--color-brand-500)"};
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

function DateFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const { startDate, endDate } = useSelector(
    (store) => store.filters.dateRange
  );
  const dispatch = useDispatch();

  const handleStartDateChange = (newDate) => {
    const formattedDate = newDate.toISOString().split("T")[0];
    dispatch(addStartDate(formattedDate));
  };

  const handleEndDateChange = (newDate) => {
    const formattedDate = newDate.toISOString().split("T")[0];
    if (formattedDate >= startDate) {
      dispatch(addEndDate(formattedDate));
    } else {
      toast.error("The endDate should be higher than startDate");
      return;
    }
  };

  return (
    <Container>
      <HeaderRow onClick={() => setIsOpen((o) => !o)}>
        <Heading as="h5">Date</Heading>
        <span>{isOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
      </HeaderRow>

      {isOpen && (
        <div>
          <DateContaier isactive={(startDate !== null).toString()}>
            <label htmlFor="startDate">Start Date</label>
            <ReactDatePicker
              selected={startDate ? new Date(startDate) : null}
              onChange={handleStartDateChange}
              dateFormat="dd/MM/yyyy"
              id="startDate"
            />
          </DateContaier>
          <DateContaier isactive={(endDate !== null).toString()}>
            <label htmlFor="endDate">End Date</label>
            <ReactDatePicker
              selected={endDate ? new Date(endDate) : null}
              onChange={handleEndDateChange}
              dateFormat="dd/MM/yyyy"
              id="endDate"
            />
          </DateContaier>
        </div>
      )}
    </Container>
  );
}

export default DateFilter;
