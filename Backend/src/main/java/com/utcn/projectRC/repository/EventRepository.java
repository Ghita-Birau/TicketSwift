package com.utcn.projectRC.repository;

import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.model.TicketCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface EventRepository extends JpaRepository <Event, Integer> {
    List<Event> findAllByEventNameContainingIgnoreCase(String searchTerm);
    List<Event> findAllByVenueId_LocationContainingIgnoreCase(String searchTerm);

    List<Event> findAllByStartDateBetween(LocalDate firstDate, LocalDate secondDate);
    List<Event> findAllByStartDateAfter(LocalDate firstDate);
    List<Event> findAllByStartDateBefore(LocalDate secondDate);

    List<Event> findAllByListEventTicketCategory_PriceBetween(long priceFrom, long priceTo);
    List<Event> findAllByListEventTicketCategory_PriceGreaterThanEqual(long priceFrom);
    List<Event> findAllByListEventTicketCategory_PriceLessThanEqual(long priceTo);

    List<Event> findAllByEventTypeId_EventTypeNameContainingIgnoreCase(String eventTypeName);

    List<Event> findAllByListEventTicketCategory_TicketCategory_DescriptionInIgnoreCase(List<String> categoryDescriptions);


    List<Event> findAllByListEventTicketCategory_AccessContainingIgnoreCase(String access);

    List<Event> findAllByListEventTicketCategory_DiscountPercentageGreaterThan(Double discountPercentage);
}
