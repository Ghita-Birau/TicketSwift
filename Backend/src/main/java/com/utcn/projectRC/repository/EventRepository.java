package com.utcn.projectRC.repository;

import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.model.TicketCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface EventRepository extends JpaRepository <Event, Integer> {
    List<Event> findAllByVenueId_LocationAndEventTypeId_EventTypeName(String location, String eventTypeName);
    List<Event> findAllByEventName(String eventName);
    List<Event> findAllByVenueId_Location(String location);

    List<Event> findAllByEventNameContainingIgnoreCaseOrVenueId_LocationContainingIgnoreCase(String eventName, String eventLocation);

    List<Event> findAllByStartDate(LocalDate startDate);
    List<Event> findAllByStartDateBetween(LocalDate firstDate, LocalDate secondDate);
    List<Event> findAllByStartDateAfter(LocalDate firstDate);
    List<Event> findAllByStartDateBefore(LocalDate secondDate);



    List<Event> findAllByListEventTicketCategory_PriceBetween(long priceFrom, long priceTo);
    List<Event> findAllByListEventTicketCategory_PriceGreaterThanEqual(long priceFrom);
    List<Event> findAllByListEventTicketCategory_PriceLessThanEqual(long priceTo);

    //List<Event> findAllByListEventTicketCategories_DescriptionContainingIgnoreCase(String category);

}
