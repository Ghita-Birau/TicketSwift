import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../services/apiAuth";
import useUser from "./useUser";
import toast from "react-hot-toast";

function useUpdateUser() {
  const { user } = useUser();
  const { mutate: update, isLoading: isUpdating } = useMutation({
    mutationFn: (newBody) => updateUser({ id: user.userId, newBody }),
    onSuccess: () => {
      toast.success("Successfully updated the user");
    },
  });

  return {
    update,
    isUpdating,
  };
}

export default useUpdateUser;
