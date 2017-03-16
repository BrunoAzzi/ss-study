package br.sc.org.sesi.smart.rest;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by Igor on 06/04/2015.
 */
@ControllerAdvice
public class GlobalControllerExceptionHandler {

    private final static Logger logger  = LoggerFactory.getLogger(GlobalControllerExceptionHandler.class);

    @ExceptionHandler
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    public Map<String,Object> handleException (Exception e) {
        Map<String,Object> ret = new HashMap<>();
        ret.put("success",false);
        ret.put("error", e.toString());
        ret.put("error_exception",e.getClass().toString());
        ret.put("error_message", e.getMessage());

        logger.error(e.getMessage(),e);

        return ret;

    }

}
