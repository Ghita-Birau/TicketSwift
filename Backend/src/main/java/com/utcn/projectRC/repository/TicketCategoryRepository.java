package com.utcn.projectRC.repository;

import com.utcn.projectRC.model.TicketCategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketCategoryRepository extends CrudRepository<TicketCategory, Integer> {
    //List<TicketCategory> findAllByTicketCategoryIdAndDescription(Integer id, String description);

//    List<TicketCategory> findAllByTicketCategoryId(Integer id);
//
//    TicketCategory findTicketCategoryByTicketCategoryId(Integer ticketCategoryId);
//
//    TicketCategory findTicketCategoryByDescriptionAndPrice(String description, Integer price);

}
