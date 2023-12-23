import { useDispatch, useSelector } from "react-redux";
import { changeValues } from "../../../contexts/filterSlice";

import ReactSlider from "react-slider";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./slider.css";

const Container = styled.div`
  padding: 0.4rem;
  border-radius: 0.5rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  max-width: 10rem;
  border-radius: 6px;
  border: 1px solid var(--color-gray-300);
  text-align: center;
`;

function PriceSlider() {
  const dispatch = useDispatch();
  const { range } = useSelector((store) => store.filters.price);

  function handleChange(newValues) {
    dispatch(changeValues(newValues));
  }

  return (
    <Container>
      <ReactSlider
        className="slider"
        value={range}
        onChange={handleChange}
        min={0}
        max={10000}
      />
      <Row>
        <div>
          <StyledInput
            type="text"
            id="minPrice"
            value={range[0]}
            onChange={(e) => handleChange([+e.target.value, range[1]])}
          />
        </div>
        <span>-</span>
        <div>
          <StyledInput
            type="text"
            id="maxPrice"
            value={range[1]}
            onChange={(e) => handleChange([range[0], +e.target.value])}
          />
        </div>
      </Row>
    </Container>
  );
}

PriceSlider.propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
};

export default PriceSlider;
