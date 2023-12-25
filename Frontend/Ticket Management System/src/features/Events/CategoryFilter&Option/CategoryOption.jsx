import PropTypes from "prop-types";
import Checkbox from "../../../ui/Checkbox";

function CategoryOption({ label, data, onAdd, onDelete }) {
  const isChecked = data.includes(label);

  function handleChange() {
    if (!isChecked) {
      onAdd(label);
    } else {
      onDelete(label);
    }
  }
  return (
    <Checkbox onChange={handleChange} label={label} isChecked={isChecked} />
  );
}

CategoryOption.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
};

export default CategoryOption;
