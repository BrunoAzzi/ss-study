package br.org.sesisc.smart.safety.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "markers")
public class Marker {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull(message = "Longitude é um campo obrigatório.")
    private String longitude;

    @NotNull(message = "Lagitude é um campo obrigatório.")
    private String latitude;

    @ManyToOne
    @JoinColumn(name = "icon_id")
    private Icon icon;

    public Marker() { }

    public Marker(String longitude, String latitude, Icon icon) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.icon = icon;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public Icon getIcon() {
        return icon;
    }

    public void setIcon(Icon icon) {
        this.icon = icon;
    }
}
