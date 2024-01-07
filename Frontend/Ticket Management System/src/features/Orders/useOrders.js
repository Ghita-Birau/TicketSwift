import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../../services/apiOrders";
import useUser from "../authentication/useUser";

function useOrders() {
  const { user } = useUser();

  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders", user],
    queryFn: () => getAllOrders({ email: user.userEmail }),
  });
  return { orders, isLoading };
}

export default useOrders;
