package com.utcn.projectRC.repository;

import com.utcn.projectRC.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRepository extends JpaRepository <Event, Integer> {
    List<Event> findAllByVenueId_LocationAndEventTypeId_EventTypeName(String location, String eventTypeName);

    List<Event> findAllByEventName(String eventName);
    List<Event> findAllByVenueId_Location(String location);
}
