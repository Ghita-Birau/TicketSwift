import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllFilteredEvents } from "../../services/apiEvents";
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { PAGE_SIZE } from "../../utils/Constants";
import { useSearchParams } from "react-router-dom";

function useEventsFilters() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || 0;

  const filters = useSelector((store) => store.filters);
  const {
    sortBy: sortByFilter,
    searchTerm,
    categories,
    price: { range },
    dateRange: { startDate, endDate },
    hasDiscount,
    ticketCategories,
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
      ticketCategoryDescriptions: ticketCategories,
      ticketCategoryAccess: null,
      hasDiscount,
      sortBy: sortingVal,
      ascending: actualVal,
      page: Number(currentPage),
      size: PAGE_SIZE,
    }),
    [
      categories,
      startDate,
      endDate,
      range,
      searchTerm,
      actualVal,
      sortingVal,
      hasDiscount,
      ticketCategories,
      currentPage,
    ]
  );

  const {
    isLoading,
    data: events,
    mutate,
  } = useMutation({
    mutationFn: () => getAllFilteredEvents(filtersAPI),
    onSuccess: (data) => {
      if (data && data.numberOfEvents > PAGE_SIZE * (Number(currentPage) + 1)) {
        queryClient.prefetchQuery(
          ["events", filtersAPI, Number(currentPage) + 1],
          () =>
            getAllFilteredEvents({
              ...filtersAPI,
              page: Number(currentPage) + 1,
            })
        );
      }

      if (data && Number(currentPage) > 0) {
        queryClient.prefetchQuery(
          ["events", filtersAPI, Number(currentPage) - 1],
          () =>
            getAllFilteredEvents({
              ...filtersAPI,
              page: Number(currentPage) - 1,
            })
        );
      }
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading) {
        mutate(filtersAPI);
      }
    };

    fetchData();
  }, [filtersAPI, mutate, isLoading, currentPage]);

  return {
    events,
    isLoading,
  };
}

export default useEventsFilters;
