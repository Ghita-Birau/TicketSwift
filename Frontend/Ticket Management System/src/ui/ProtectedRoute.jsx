import PropTypes from "prop-types";
import useUser from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
  const { user } = useUser();

  if (user != null) {
    return children;
  }
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
