package com.utcn.projectRC.model.Filter;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.List;

@Data
public class FilterRequest {
    private String searchTerm;
    private LocalDate startDateFrom;
    private LocalDate startDateTo;
    private long priceFrom;
    private long priceTo;
    private List<String> eventTypeNames;
    private List<String> ticketCategoryDescriptions;
    private String ticketCategoryAccess;
    private boolean hasDiscount;

    private String SortBy;
    private boolean ascending;

    private Integer page;
    private Integer size;
}
