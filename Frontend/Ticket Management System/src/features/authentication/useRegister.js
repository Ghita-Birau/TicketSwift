import { useMutation } from "@tanstack/react-query";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { register as registerAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useRegister() {
  const { setValue: setAccessToken } = useLocalStorage("token", "");

  const { mutate: register, isLoading } = useMutation({
    mutationFn: (user) => registerAPI({ user }),
    onSuccess: (data) => {
      toast.success("Successfully registered!");
      setAccessToken(data.token);
    },
  });

  return { register, isLoading };
}

export default useRegister;
