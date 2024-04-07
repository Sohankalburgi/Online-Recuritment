package com.example.Job_Recuritment.Utilites.UrlUtil;

import jakarta.servlet.http.HttpServletRequest;

public class UrlUtil {
    public static String getApplicationUrl(HttpServletRequest request){
        String appUrl = request.getRequestURL().toString();
        return appUrl.replace(request.getServletPath(), "");

    }
}
