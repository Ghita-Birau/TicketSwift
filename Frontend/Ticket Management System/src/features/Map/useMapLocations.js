import { useQuery } from "@tanstack/react-query";
import getLocations from "../../services/apiMap";

function useMapLocations() {
  const { data: locations, isLoading } = useQuery({
    queryKey: ["locations"],
    queryFn: () => getLocations(),
  });
  return { locations, isLoading };
}

export default useMapLocations;
