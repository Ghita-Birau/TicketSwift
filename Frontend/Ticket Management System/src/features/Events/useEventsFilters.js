import { useMutation } from "@tanstack/react-query";
import { getAllFilteredEvents } from "../../services/apiEvents";
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

function useEventsFilters() {
  const filters = useSelector((store) => store.filters);
  const {
    searchTerm,
    categories,
    price: { range },
    dateRange: { startDate, endDate },
  } = filters;

  const filtersAPI = useMemo(
    () => ({
      searchTerm,
      startDateFrom: startDate,
      startDateTo: endDate,
      priceFrom: range[0],
      priceTo: range[1],
      eventTypeName: categories.length > 0 ? categories[0] : null,
      ticketCategoryDescription: null,
      ticketCategoryAccess: null,
      hasDiscount: false,
      shouldSortByNameAscending: false,
      shouldSortByNameDescending: false,
      shouldSortByPriceAscending: false,
      shouldSortByPriceDescending: false,
      shouldSortByStartDateAscending: false,
      shouldSortByStartDateDescending: false,
    }),
    [categories, startDate, endDate, range, searchTerm]
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
