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

const Container = styled.div`
  background-color: var(--color-gray-0);
  padding: 1.2rem 2rem;
  transition: all 0.2s;
  color: var(--color-gray-600);

  & > div {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

const Row = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  & > span > svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    & > span > svg {
      color: var(--color-brand-500);
    }
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
    font-size: 1.4rem;
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
    if (formattedDate > startDate) {
      dispatch(addEndDate(formattedDate));
    } else {
      toast.error("The endDate should be higher than startDate");
      return;
    }
  };

  return (
    <Container>
      <Row onClick={() => setIsOpen((o) => !o)}>
        <Heading as="h5">Date</Heading>
        <span>{isOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
      </Row>

      {isOpen && (
        <div>
          <DateContaier>
            <label htmlFor="startDate">Start Date</label>
            <ReactDatePicker
              selected={startDate ? new Date(startDate) : null}
              onChange={handleStartDateChange}
              dateFormat="dd/MM/yyyy"
              id="startDate"
            />
          </DateContaier>
          <DateContaier>
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
