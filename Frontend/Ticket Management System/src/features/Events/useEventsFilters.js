import { useMutation } from "@tanstack/react-query";
import { getAllFilteredEvents } from "../../services/apiEvents";
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

function useEventsFilters() {
  const filters = useSelector((store) => store.filters);
  const {
    sortBy: sortByFilter,
    searchTerm,
    categories,
    price: { range },
    dateRange: { startDate, endDate },
  } = filters;

  const sortingVal = sortByFilter.slice().split("-")[0];
  const actualVal = sortByFilter.slice().split("-")[1] === "asc";

  const filtersAPI = useMemo(
    () => ({
      searchTerm,
      startDateFrom: startDate,
      startDateTo: endDate,
      priceFrom: range[0],
      priceTo: range[1],
      eventTypeNames: categories,
      ticketCategoryDescription: null,
      ticketCategoryAccess: null,
      hasDiscount: false,
      sortBy: sortingVal,
      ascending: actualVal,
    }),
    [categories, startDate, endDate, range, searchTerm, actualVal, sortingVal]
  );

  const {
    isLoading,
    data: events,
    mutate,
  } = useMutation({
    mutationFn: () => getAllFilteredEvents(filtersAPI),
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading) {
        mutate(filtersAPI);
      }
    };

    fetchData();
  }, [filtersAPI, mutate, isLoading]);

  return {
    events,
    isLoading,
  };
}

export default useEventsFilters;
