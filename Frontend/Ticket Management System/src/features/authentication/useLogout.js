import { logout as logoutAPI } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import useUser from "./useUser";
import toast from "react-hot-toast";

function useLogout() {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const { removeValue } = useLocalStorage("userId", "");
  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: () => logoutAPI({ email: user.userEmail }),
    onSuccess: () => {
      toast.success("You've successfully logged out");
      removeValue();
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => {
      toast.success("Something went wrong while trying to log out");
    },
  });

  return { logout, isLoggingOut };
}

export default useLogout;
