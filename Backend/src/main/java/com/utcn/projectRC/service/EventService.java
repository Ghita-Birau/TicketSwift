package com.utcn.projectRC.Service;

import com.utcn.projectRC.DTO.*;
import com.utcn.projectRC.Exception.NotFoundException;
import com.utcn.projectRC.Entity.Event;
import com.utcn.projectRC.Entity.EventTicketCategory;
import com.utcn.projectRC.Entity.EventType;
import com.utcn.projectRC.Request.FilterRequest;
import com.utcn.projectRC.Repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class EventService {

    private final EventRepository eventRepository;
    public EventDTO convertEventToEventDTO(Event event) {
        EventDTO eventDTO = new EventDTO();
        eventDTO.setEventId(event.getEventId());

        EventType eventType = event.getEventTypeId();
        if (eventType != null) {
            eventDTO.setEventTypeName(eventType.getEventTypeName());
        }

        eventDTO.setDescription(event.getEventDescription());
        eventDTO.setName(event.getEventName());
        eventDTO.setStartDate(event.getStartDate());
        eventDTO.setEndDate(event.getEndDate());
        eventDTO.setUrlImage(event.getUrlImage());

        VenueDTO venueDTO = new VenueDTO();
        venueDTO.setVenueId(event.getVenueId().getVenueId());
        venueDTO.setLocation(event.getVenueId().getLocation());
        venueDTO.setType(event.getVenueId().getType());
        venueDTO.setCapacity(event.getVenueId().getCapacity());
        venueDTO.setLatitude(event.getVenueId().getLatitude());
        venueDTO.setLongitude(event.getVenueId().getLongitude());
        eventDTO.setVenue(venueDTO);

        List<EventTicketCategoryDTO> ticketCategories = event.getListEventTicketCategory()
                .stream()
                .map(this::convertEventTicketCategoryToDTO)
                .collect(Collectors.toList());

        eventDTO.setListEventTicketCategories(ticketCategories);
        return eventDTO;
    }

    public MapEventDTO convertEventToMapEventDTO(Event event) {
        MapEventDTO mapEventDTO = new MapEventDTO();
        mapEventDTO.setEventId(event.getEventId());

        EventType eventType = event.getEventTypeId();
        if (eventType != null) {
            mapEventDTO.setEventTypeName(eventType.getEventTypeName());
        }

        mapEventDTO.setDescription(event.getEventDescription());
        mapEventDTO.setName(event.getEventName());
        mapEventDTO.setStartDate(event.getStartDate());
        mapEventDTO.setEndDate(event.getEndDate());
        mapEventDTO.setUrlImage(event.getUrlImage());

        VenueDTO venueDTO = new VenueDTO();
        venueDTO.setVenueId(event.getVenueId().getVenueId());
        venueDTO.setLocation(event.getVenueId().getLocation());
        venueDTO.setType(event.getVenueId().getType());
        venueDTO.setCapacity(event.getVenueId().getCapacity());
        venueDTO.setLatitude(event.getVenueId().getLatitude());
        venueDTO.setLongitude(event.getVenueId().getLongitude());
        mapEventDTO.setVenue(venueDTO);

        return mapEventDTO;
    }

    public HomeEventDTO convertEventToHomeEventDTO(Event event) {
        HomeEventDTO homeEventDTO = new HomeEventDTO();

        homeEventDTO.setEventId(event.getEventId());
        homeEventDTO.setEventName(event.getEventName());
        homeEventDTO.setEventDescription(event.getEventDescription());
        homeEventDTO.setUrlImage(event.getUrlImage());

        return homeEventDTO;
    }

    private EventTicketCategoryDTO convertEventTicketCategoryToDTO(EventTicketCategory eventTicketCategory) {
        EventTicketCategoryDTO eventTicketCategoryDTO = new EventTicketCategoryDTO();
        eventTicketCategoryDTO.setEventTicketCategoryId(eventTicketCategory.getEventTicketCategoryId());
        eventTicketCategoryDTO.setPrice(eventTicketCategory.getPrice());
        eventTicketCategoryDTO.setAccess(eventTicketCategory.getAccess());
        eventTicketCategoryDTO.setAvaibleQuantity(eventTicketCategory.getAvaibleQuantity());
        eventTicketCategoryDTO.setDiscountPercentage(eventTicketCategory.getDiscountPercentage());
        eventTicketCategoryDTO.setSales(eventTicketCategory.getPrice() - (eventTicketCategoryDTO.getDiscountPercentage() / 100 * eventTicketCategory.getPrice() ));
        eventTicketCategoryDTO.setDescription(eventTicketCategory.getTicketCategory().getDescription());

        return eventTicketCategoryDTO;
    }

    public List<MapEventDTO> getAllMapEvents() {
        List<Event> eventList = eventRepository.findAll();
        return eventList.stream().map(this::convertEventToMapEventDTO).toList();
    }

    public List<HomeEventDTO> getAllHomeEvents() {
        List<Event> eventList = eventRepository.findAll();
        return eventList.stream().map(this::convertEventToHomeEventDTO).toList();
    }

    public List<Event> getAllEvents() {
        List<Event> eventList = eventRepository.findAll();
        return eventList.stream().toList();
    }

    public List<Event> searchEventsByNameOrLocation(String searchTerm) {
        List<Event> eventList = null;

        if (searchTerm != null) {
            eventList = eventRepository.findAllByEventNameContainingIgnoreCase(searchTerm);
            if (eventList.isEmpty()) {
                eventList = eventRepository.findAllByVenueId_LocationContainingIgnoreCase(searchTerm);
            }
        } else {
            eventList = eventRepository.findAll();
        }
        return eventList.stream().toList();
    }


    public List<Event> filterEventsByStartDateRange(LocalDate startDateFrom, LocalDate startDateTo) {
        List<Event> eventList = null;

        if(startDateFrom != null && startDateTo != null) {
            eventList = eventRepository.findAllByStartDateBetween(startDateFrom, startDateTo);
        } else if (startDateFrom != null) {
            eventList = eventRepository.findAllByStartDateAfter(startDateFrom);
        } else if (startDateTo != null) {
            eventList = eventRepository.findAllByStartDateBefore(startDateTo);
        } else {
            eventList = eventRepository.findAll();
        }
        return eventList.stream().toList();
    }

    public List<Event> filterEventsByPriceRange(long priceFrom, long priceTo) {
        List<Event> eventListAllCategory;

        if (priceFrom != 0 && priceTo != 0) {
            eventListAllCategory = eventRepository.findAllByListEventTicketCategory_PriceBetween(priceFrom, priceTo);
        } else if (priceFrom != 0) {
            eventListAllCategory = eventRepository.findAllByListEventTicketCategory_PriceGreaterThanEqual(priceFrom);
        } else if (priceTo != 0) {
            eventListAllCategory = eventRepository.findAllByListEventTicketCategory_PriceLessThanEqual(priceTo);
        } else {
            eventListAllCategory = eventRepository.findAll();
        }

        List<Event> eventList = new ArrayList<>();
        for (Event event : eventListAllCategory) {
            List<EventTicketCategory> filteredCategories = event.getListEventTicketCategory()
                    .stream()
                    .filter(category -> category.getPrice() >= priceFrom && category.getPrice() <= priceTo)
                    .collect(Collectors.toList());

            event.setListEventTicketCategory(filteredCategories);
            eventList.add(event);
        }
        return eventList;
    }


    public List<Event> filterEventsByEventType(List<String> eventTypeNames) {
        if(eventTypeNames.isEmpty()) {
            return eventRepository.findAll();
        }
        List<Event> eventList = new ArrayList<>();
        for (String eventTypeName : eventTypeNames) {
            List<Event> events = eventRepository.findAllByEventTypeId_EventTypeNameContainingIgnoreCase(eventTypeName);
            eventList.addAll(events);
        }
        return eventList.stream().distinct().toList();
    }

    public List<Event> filterEventsByTicketCategoryDescription(List<String> categoryDescriptions) {
        if(categoryDescriptions.isEmpty()) {
            return eventRepository.findAll();
        }

        List<Event> eventListAllCategory = eventRepository.findAllByListEventTicketCategory_TicketCategory_DescriptionInIgnoreCase(categoryDescriptions);

        System.out.println(eventListAllCategory.size());
        List<Event> eventList = new ArrayList<>();
        for(Event event : eventListAllCategory) {
            List<EventTicketCategory> filterCategoriesForEvent = new ArrayList<>();

            for(String description : categoryDescriptions) {
                List<EventTicketCategory> filteredCategories = event.getListEventTicketCategory().stream()
                        .filter(category -> category.getTicketCategory().getDescription().equals(description))
                        .collect(Collectors.toList());
                if(!filteredCategories.isEmpty()) {
                    filterCategoriesForEvent.addAll(filteredCategories);
                }
            }
            if(!filterCategoriesForEvent.isEmpty()) {
                event.setListEventTicketCategory(filterCategoriesForEvent);
                eventList.add(event);
            }
        }
        return eventList;
    }

    public List<Event> filterEventsByTicketCategoryAccess(String access) {
        List<Event> eventListAllCategory = eventRepository.findAllByListEventTicketCategory_AccessContainingIgnoreCase(access);

        List<Event> eventList = new ArrayList<>();
        for (Event event : eventListAllCategory) {
            List<EventTicketCategory> filteredCategories = event.getListEventTicketCategory()
                    .stream()
                    .filter(category -> category.getAccess().equals(access))
                    .collect(Collectors.toList());

            event.setListEventTicketCategory(filteredCategories);
            eventList.add(event);
        }
        return eventList;
    }

    public List<Event> filterEventsByDiscountedTickets(boolean hasDicount) {
        List<Event> eventList = new ArrayList<>();
        if(hasDicount) {
            List<Event> eventListAllCategory = eventRepository.findAllByListEventTicketCategory_DiscountPercentageGreaterThan(0.0);

            for (Event event : eventListAllCategory) {
                List<EventTicketCategory> filteredCategories = event.getListEventTicketCategory()
                        .stream()
                        .filter(category -> category.getDiscountPercentage() > 0.0)
                        .collect(Collectors.toList());

                event.setListEventTicketCategory(filteredCategories);
                eventList.add(event);
            }
        }
        return eventList;
    }

    public List<Event> sortEvents(List<Event> events, String sortBy, boolean ascending) {
        if(events.isEmpty()) {
            throw new NotFoundException("There are no events to sort!");
        } else {
            List<Event> sortedEvents = events.stream().collect(Collectors.toList());
            if(sortBy != null) {
                switch (sortBy.toLowerCase()) {
                    case "name":
                        sortedEvents.sort(Comparator.comparing(Event::getEventName));
                        break;
                    case "price":
                        sortedEvents.sort(Comparator.comparing(event -> {
                            long minPrice = event.getListEventTicketCategory()
                                    .stream()
                                    .mapToLong(EventTicketCategory::getPrice)
                                    .min()
                                    .orElse(0);
                            return minPrice;
                        }));

                        sortedEvents.forEach(event -> {
                            List<EventTicketCategory> sortedCategories = event.getListEventTicketCategory()
                                    .stream()
                                    .sorted(Comparator.comparing(EventTicketCategory::getPrice))
                                    .collect(Collectors.toList());
                            event.setListEventTicketCategory(sortedCategories);
                        });
                        break;
                    case "startdate":
                        sortedEvents.sort(Comparator.comparing(Event::getStartDate));
                        break;
                    default:
                        throw new NotFoundException("Sorting criteria unknown: " + sortBy);
                }
            }
            if(!ascending) {
                Collections.reverse(sortedEvents);

                if(sortBy.toLowerCase().equals("price")) {
                    sortedEvents.forEach(event -> {
                        List<EventTicketCategory> sortedCategories = event.getListEventTicketCategory()
                                .stream()
                                .sorted(Comparator.comparing(EventTicketCategory::getPrice).reversed())
                                .collect(Collectors.toList());
                        event.setListEventTicketCategory(sortedCategories);
                    });
                }
            }
            return sortedEvents;
        }
     }

    public List<Event> filterEvents(FilterRequest filterRequest) {
        List<Event> filteredEvents = getAllEvents();

        if (filterRequest.getSearchTerm() != null) {
            List<Event> list = searchEventsByNameOrLocation(filterRequest.getSearchTerm());
            filteredEvents = filteredEvents.stream()
                    .filter(list::contains)
                    .collect(Collectors.toList());
        }

        if (filterRequest.getStartDateFrom() != null || filterRequest.getStartDateTo() != null) {
            List<Event> list = filterEventsByStartDateRange(filterRequest.getStartDateFrom(), filterRequest.getStartDateTo());
            filteredEvents = filteredEvents.stream()
                    .filter(list::contains)
                    .collect(Collectors.toList());
        }

        if (filterRequest.getPriceFrom() != 0 || filterRequest.getPriceTo() != 10000) {
            List<Event> list = filterEventsByPriceRange(filterRequest.getPriceFrom(), filterRequest.getPriceTo());
            filteredEvents = filteredEvents.stream()
                    .filter(list::contains)
                    .collect(Collectors.toList());
        }

        if (!filterRequest.getEventTypeNames().isEmpty()) {
            List<Event> list = filterEventsByEventType(filterRequest.getEventTypeNames());
            filteredEvents = filteredEvents.stream()
                    .filter(list::contains)
                    .collect(Collectors.toList());
        }

        if (!filterRequest.getTicketCategoryDescriptions().isEmpty()) {
            List<Event> list = filterEventsByTicketCategoryDescription(filterRequest.getTicketCategoryDescriptions());
            filteredEvents = filteredEvents.stream()
                    .filter(list::contains)
                    .collect(Collectors.toList());
        }

        if (filterRequest.getTicketCategoryAccess() != null) {
            List<Event> list = filterEventsByTicketCategoryAccess(filterRequest.getTicketCategoryAccess());
            filteredEvents = filteredEvents.stream()
                    .filter(list::contains)
                    .collect(Collectors.toList());
        }

        if (filterRequest.isHasDiscount()) {
            List<Event> list = filterEventsByDiscountedTickets(filterRequest.isHasDiscount());
            filteredEvents = filteredEvents.stream()
                    .filter(list::contains)
                    .collect(Collectors.toList());
        }
        return filteredEvents;
    }

    public List<Event> sortFilterEvents(List<Event> eventList, FilterRequest filterRequest) {
        List<Event> sortedEvents = new ArrayList<>();

        for (Event event : eventList) {
            List<EventTicketCategory> filteredCategories = event.getListEventTicketCategory()
                    .stream()
                    .collect(Collectors.toList());

            if(!filteredCategories.isEmpty() && !sortedEvents.contains(event)) {
                sortedEvents.add(event);
            }
        }

        sortedEvents = sortEvents(sortedEvents, filterRequest.getSortBy(), filterRequest.isAscending());
        return sortedEvents;
    }

    public List<Event> paginateEvents (List<Event> filteredAndSortedEvents, FilterRequest filterRequest) {
        if(filterRequest.getPage() != null && filterRequest.getSize() != null) {
            Integer page = filterRequest.getPage();
            Integer size = filterRequest.getSize();
            Integer start = page * size;
            Integer end = Math.min((start + size), filteredAndSortedEvents.size());
            filteredAndSortedEvents = filteredAndSortedEvents.subList(start, end);
        }
        return filteredAndSortedEvents;
    }

    public List<EventDTO> filtrateSortAndPaginateEvents(FilterRequest filterRequest) {
        List<Event> filteredEvents = filterEvents(filterRequest);

        List<Event> sortedEvents = sortFilterEvents(filteredEvents, filterRequest);

        List<Event> paginatedEvents = paginateEvents(sortedEvents, filterRequest);

        if(paginatedEvents.isEmpty()) {
            throw new NotFoundException("There are no tickets for the selected option");
        } else {
            return paginatedEvents.stream().map(this::convertEventToEventDTO).toList();
        }
    }

    public Integer findEventByName(String eventName) {
        return eventRepository.findEventByEventName(eventName).getEventId();
    }
}
