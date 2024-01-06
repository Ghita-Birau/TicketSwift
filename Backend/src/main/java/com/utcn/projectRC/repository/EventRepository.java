package com.utcn.projectRC.Repository;

import com.utcn.projectRC.Entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
@Repository
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

    Event findEventByEventName(String eventName);
}
