package com.revamp.core.service;

import java.util.Optional;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class AuditorAwareImpl implements AuditorAware<String> {

    
    public Optional<String> getCurrentAuditor() {
        
//    	Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//    	Object pricipal = auth.getPrincipal();
//    	System.out.println("Lofinuseee***" + pricipal.toString());
  	return Optional.ofNullable("puthuyir");
    
    }
}