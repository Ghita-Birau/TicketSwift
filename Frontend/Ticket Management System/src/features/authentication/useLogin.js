import { useMutation } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import toast from "react-hot-toast";

function useLogin() {
  const { setValue: setAccessToken } = useLocalStorage("token", "");

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (response) => {
      toast.success("Successfully logged in!");
      setAccessToken(response.token !== undefined && response.token);
    },
  });

  return { login, isLoading };
}

export default useLogin;
