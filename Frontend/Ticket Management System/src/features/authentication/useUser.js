import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function useUser() {
  const { storedValue: userId } = useLocalStorage("userId", "");
  const isEnabled = !!userId;

  const { data: user, isLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser({ id: userId }),
    enabled: isEnabled,
  });

  return { user, isLoading };
}

export default useUser;
