package com.utcn.projectRC.model.Filter;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
public class FilterRequest {
    private String searchTerm;
    private LocalDate startDateFrom;
    private LocalDate startDateTo;
    private long priceFrom;
    private long priceTo;
    private String eventTypeName;
    private String ticketCategoryDescription;
    private String ticketCategoryAccess;
    private boolean hasDiscount;

    private boolean shouldSortByNameAscending;
    private boolean shouldSortByNameDescending;
    private boolean shouldSortByPriceAscending;
    private boolean shouldSortByPriceDescending;
    private boolean shouldSortByStartDateAscending;
    private boolean shouldSortByStartDateDescending;
}
