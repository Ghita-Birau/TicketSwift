import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../../services/apiEvents";

function useEvents() {
  const { data: events, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });
  return { events, isLoading };
}

export default useEvents;
