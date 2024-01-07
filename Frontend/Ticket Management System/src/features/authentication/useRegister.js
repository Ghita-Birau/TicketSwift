import { useMutation } from "@tanstack/react-query";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { register as registerAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useRegister() {
  const { setValue: setUserId } = useLocalStorage("userId", "");

  const { mutate: register, isLoading } = useMutation({
    mutationFn: (user) => registerAPI({ user }),
    onSuccess: (data) => {
      toast.success("Successfully registered!");
      setUserId(data.userId);
    },
  });

  return { register, isLoading };
}

export default useRegister;
