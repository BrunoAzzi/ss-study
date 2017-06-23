package br.org.sesisc.smart.safety.models.enums;

import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;

public enum  ResponsibleType {

    RESPONSIBLE_ENGINEER("engineer"),

    RESPONSIBLE_SAFETY("safety");

    private static final Map<String, ResponsibleType> map;

    private String type;

    ResponsibleType(String type) {
        this.type = type;
    }

    static {
        map = Arrays.stream(values()).collect(Collectors.toMap(e -> e.type, e -> e));
    }

    public static ResponsibleType fromText(String value) {
        return map.get(value);
    }
}
