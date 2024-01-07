import { useMutation } from "@tanstack/react-query";
import { postOrders } from "../../services/apiOrders";
import useUser from "../authentication/useUser";
import toast from "react-hot-toast";

function useCheckout() {
  const { user } = useUser();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: ({ orders }) => postOrders({ email: user.userEmail, orders }),
    onSuccess: () => {
      toast.success("You've successfully checked out");
    },
  });

  return { checkout, isCheckingOut };
}

export default useCheckout;
