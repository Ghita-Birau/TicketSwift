import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { getUser } from "../../services/apiAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import {
  getUserStart,
  getUserSuccess,
  getUserFailure,
} from "../../contexts/userSlice";

function useUser() {
  const { storedValue: userId } = useLocalStorage("userId", "");
  const dispatch = useDispatch();
  const isEnabled = !!userId;

  const { isLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser({ id: userId }),
    enabled: isEnabled,
    onSuccess: (userData) => {
      dispatch(getUserSuccess(userData));
    },
    onError: (error) => {
      dispatch(getUserFailure(error.message));
    },
  });

  useEffect(() => {
    if (isEnabled) {
      dispatch(getUserStart());
    }
  }, [isEnabled, dispatch]);

  return isLoading;
}

export default useUser;
