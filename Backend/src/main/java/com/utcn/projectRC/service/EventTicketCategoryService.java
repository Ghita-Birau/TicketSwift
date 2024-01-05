package com.utcn.projectRC.service;

import com.utcn.projectRC.model.EventTicketCategory;
import com.utcn.projectRC.repository.EventTicketCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class EventTicketCategoryService {
    private final EventTicketCategoryRepository eventTicketCategoryRepository;
    public EventTicketCategory findByEventIdAndTicketCategoryId(Integer eventId, Integer ticketCategoryId) {
        return eventTicketCategoryRepository.findByEventIdAndTicketCategoryId(eventId, ticketCategoryId);
    }
}
