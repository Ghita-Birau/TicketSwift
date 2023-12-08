import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../../services/apiOrders";

function useOrders() {
  const { data: orders, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: getAllOrders,
  });
  return { orders, isLoading };
}

export default useOrders;
