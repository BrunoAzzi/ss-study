package br.org.sesisc.smart.safety.responses;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;

public class SuccessResponse {

    public static ResponseEntity<HashMap> handle(String[] keys, Object[] objects, HttpStatus status) {
        final HashMap<String, Object> map = new HashMap<>();

        if (keys.length > 0 && keys.length == objects.length) {
            for (int i = 0; i < keys.length; i++) {
                map.put(keys[i], objects[i]);
            }
        }

        return new ResponseEntity<HashMap>(map, status);
    }

}
