package br.org.sesisc.smart.safety.models.enums;

import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;

public enum InstructionDegreeType {
    FUNDAMENTAL_INCOMPLETO(1),  FUNDAMENTAL_COMPLETO(2), MÉDIO_INCOMPLETO(3), MÉDIO_COMPLETO(4), SUPERIOR_INCOMPLETO(5), SUPERIOR_COMPLETO(6), PÓS_GRADUAÇÃO(7);


    private static final Map<Integer, InstructionDegreeType> map;

    private final int value ;

    InstructionDegreeType(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
    static {
        map = Arrays.stream(values()).collect(Collectors.toMap(e -> e.value, e -> e));
    }

    public static InstructionDegreeType fromInt(int value) {
        return map.get(value);
    }

}

