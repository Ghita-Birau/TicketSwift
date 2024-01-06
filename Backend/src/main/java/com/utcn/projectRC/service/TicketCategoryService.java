package com.utcn.projectRC.Service;

import com.utcn.projectRC.Repository.TicketCategoryRepository;
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
