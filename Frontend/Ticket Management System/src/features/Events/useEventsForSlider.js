import { useQuery } from "@tanstack/react-query";
import { getAllEventsForSlider } from "../../services/apiEvents";

function useEventsForSlider() {
  const { data: events, isLoading } = useQuery({
    queryKey: ["eventsSlider"],
    queryFn: getAllEventsForSlider,
  });

  return { events, isLoading };
}

export default useEventsForSlider;
