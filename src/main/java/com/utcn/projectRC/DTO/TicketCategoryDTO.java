package com.utcn.projectRC.DTO;

public class TicketCategoryDTO {
    private Integer TicketCategoryId;
    private String description;
    private long price;

    public Integer getTicketCategoryId() {
        return TicketCategoryId;
    }

    public void setTicketCategoryId(Integer ticketCategoryId) {
        TicketCategoryId = ticketCategoryId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public TicketCategoryDTO() {

    }
    public TicketCategoryDTO(Integer ticketCategoryId, String description, long price) {
        TicketCategoryId = ticketCategoryId;
        this.description = description;
        this.price = price;
    }
}
