package com.utcn.projectRC.service;

import com.utcn.projectRC.model.TicketCategory;
import com.utcn.projectRC.repository.TicketCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class TicketCategoryService {
    private final TicketCategoryRepository ticketCategoryRepository;
    public Integer findTicketCategoryByDescription(String description) {
        return ticketCategoryRepository.findTicketCategoryByDescription(description).getTicketCategoryId();
    }
}
