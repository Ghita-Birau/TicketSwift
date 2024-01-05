package com.utcn.projectRC.repository;

import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.model.EventTicketCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EventTicketCategoryRepository extends JpaRepository<EventTicketCategory, Integer> {
    @Query("SELECT etc FROM EventTicketCategory etc WHERE etc.event.eventId = :eventId AND etc.ticketCategory.ticketCategoryId = :ticketCategoryId")
    EventTicketCategory findByEventIdAndTicketCategoryId(@Param("eventId") Integer eventId, @Param("ticketCategoryId") Integer ticketCategoryId);
}
