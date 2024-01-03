import { useQuery } from "@tanstack/react-query";
import getLocations from "../../services/apiMap";
import { useLocalStorage } from "../..//hooks/useLocalStorage";

function useMapLocations() {
  const { storedValue: token } = useLocalStorage("token", "");

  const { data: locations, isLoading } = useQuery({
    queryKey: ["locations"],
    queryFn: () => getLocations({ token }),
  });
  return { locations, isLoading };
}

export default useMapLocations;
