import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import PropTypes from "prop-types";
import Loader from "./Loader";

const StyledDiv = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);

  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isLoggedIn } = useUser();
  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate("/login");
    }
  }, [navigate, isLoading, isLoggedIn]);

  if (isLoading)
    return (
      <StyledDiv>
        <Loader />
      </StyledDiv>
    );

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
