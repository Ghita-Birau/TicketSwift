import { useDispatch, useSelector } from "react-redux";
import { changeSortByValue } from "../contexts/filterSlice";

import PropTypes from "prop-types";
import Select from "./Select";

function SortBy({ options }) {
  const sortBy = useSelector((store) => store.filters.sortBy);
  const dispatch = useDispatch();

  function handleChange(value) {
    dispatch(changeSortByValue(value));
  }

  return <Select options={options} value={sortBy} onChange={handleChange} />;
}

SortBy.propTypes = {
  options: PropTypes.array,
};

export default SortBy;
