package br.org.sesisc.smart.safety.models.enums;

import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

public enum ConstructionStatus {
    IN_PROGRESS(0), PAUSED(1), FINISHED(2);

    private final int value;
    private static final Map<Integer, ConstructionStatus> map;

    ConstructionStatus(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
    static {
        map = Arrays.stream(values()).collect(Collectors.toMap(e -> e.value, e -> e));
    }

    public static ConstructionStatus fromInt(int value) {
        return map.get(value);
    }
}
