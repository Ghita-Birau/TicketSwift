package com.utcn.projectRC.repository;

import com.utcn.projectRC.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

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
}
