package br.org.sesisc.smart.safety.models;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class Sector {

    private long id;
    private String name;
    private List<Floor> floors;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Floor> getFloors() {
        return floors;
    }

    public void setFloors(List<Floor> floors) {
        this.floors = floors;
    }
}
