package br.sc.org.sesi.smart.helper;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Igor on 25/03/2015.
 */
public class RestCORSFilter implements Filter {



    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletResponse response = (HttpServletResponse) servletResponse;
        HttpServletRequest request= (HttpServletRequest) servletRequest;

        // Header disable cache
        response.setHeader("Cache-Control", "no-cache, must-revalidate");
        response.setHeader("Pragma", "no-cache");


        request.setAttribute("__KONVIVA_REST", true);

        if (request.getMethod().equals("OPTIONS")) {
            // CORS
            if (request.getHeader("Origin") != null)
                response.setHeader("Access-Control-Allow-Origin",request.getHeader("origin"));
            else
                response.setHeader("Access-Control-Allow-Origin","*");

            response.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
            response.setHeader("Access-Control-Allow-Headers","Authorization, Content-Type, Accept");
            response.setHeader("Access-Control-Allow-Credentials","true");
            // Access-Control-Allow-Headers
            //Access-Control-Allow-Credentials

            return;
        }

        response.setHeader("Access-Control-Allow-Origin","*");

        filterChain.doFilter(request,response);
    }

    @Override
    public void destroy() {

    }
}
