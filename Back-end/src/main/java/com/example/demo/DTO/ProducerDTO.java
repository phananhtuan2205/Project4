package com.example.demo.DTO;

public class ProducerDTO {
    private Integer producerId;
    private String producerName;

    public ProducerDTO(Integer producerId, String producerName) {
        this.producerId = producerId;
        this.producerName = producerName;
    }

    public ProducerDTO() {
    }



    public Integer getProducerId() {
        return this.producerId;
    }

    public void setProducerId(Integer producerId) {
        this.producerId = producerId;
    }

    public String getProducerName() {
        return this.producerName;
    }

    public void setProducerName(String producerName) {
        this.producerName = producerName;
    }
}
