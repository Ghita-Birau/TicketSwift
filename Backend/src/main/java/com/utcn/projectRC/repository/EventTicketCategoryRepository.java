package com.utcn.projectRC.repository;

import com.utcn.projectRC.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventTicketCategoryRepository extends JpaRepository<Event, Integer> {
}
