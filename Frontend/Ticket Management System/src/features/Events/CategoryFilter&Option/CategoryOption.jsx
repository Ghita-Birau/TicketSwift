import { useDispatch, useSelector } from "react-redux";
import {
  addCategoryFilter,
  deleteCategory,
} from "../../../contexts/filterSlice";
import PropTypes from "prop-types";
import Checkbox from "../../../ui/Checkbox";

function CategoryOption({ label }) {
  const { categories } = useSelector((store) => store.filters);
  const dispatch = useDispatch();
  const isChecked = categories.includes(label);

  function handleChange() {
    if (!isChecked) {
      dispatch(addCategoryFilter(label));
    } else {
      dispatch(deleteCategory(label));
    }
  }
  return (
    <Checkbox onChange={handleChange} label={label} isChecked={isChecked} />
  );
}

CategoryOption.propTypes = {
  label: PropTypes.string,
};

export default CategoryOption;
