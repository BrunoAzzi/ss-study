package br.org.sesisc.smart.safety.models;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "floors")
public class Floor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private String acronym;
    private String imageUrl;
    private String imageFileName;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "floor_id")
    private Set<Marker> markers = new HashSet<>();

    public Floor() { }

    public Floor(String name, String acronym) {
        this.name = name;
        this.acronym = acronym;
    }

    public Floor(String name, String acronym, String imageUrl) {
        this.name = name;
        this.acronym = acronym;
        this.imageUrl = imageUrl;
    }

    public Floor(String name, String acronym, String imageUrl, Set<Marker> markers) {
        this.name = name;
        this.acronym = acronym;
        this.imageUrl = imageUrl;
        this.markers = markers;
    }

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

    public String getAcronym() {
        return acronym;
    }

    public void setAcronym(String acronym) {
        this.acronym = acronym;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getImageFileName() {
        return imageFileName;
    }

    public void setImageFileName(String imageFileName) {
        this.imageFileName = imageFileName;
    }

    public Set<Marker> getMarkers() {
        return markers;
    }

    public void setMarkers(Set<Marker> markers) {
        this.markers = markers;
    }

    public void addMarker(Marker marker) {
        this.markers.add(marker);
    }

    public void removeMarker(Marker marker) {
        this.markers.remove(marker);
    }
}
