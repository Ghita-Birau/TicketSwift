import { useMutation } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import toast from "react-hot-toast";

function useLogin() {
  const { setValue: setUserId } = useLocalStorage("userId", "");

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (response) => {
      console.log(response);
      toast.success("Successfully logged in!");
      setUserId(response.userId);
    },
    onError: () => {
      toast.error("Something went wrong while trying to authenticate");
    },
  });

  return { login, isLoading };
}

export default useLogin;
