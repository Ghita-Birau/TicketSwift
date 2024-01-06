package com.utcn.projectRC.Service;

import com.utcn.projectRC.Entity.EventTicketCategory;
import com.utcn.projectRC.Repository.EventTicketCategoryRepository;
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
