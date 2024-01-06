package com.utcn.projectRC.Repository;

import com.utcn.projectRC.Entity.TicketCategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketCategoryRepository extends CrudRepository<TicketCategory, Integer> {
    TicketCategory findTicketCategoryByDescription(String description);
}
