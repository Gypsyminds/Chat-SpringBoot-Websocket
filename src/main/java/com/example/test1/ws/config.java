package com.example.test1.ws;

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;


@EnableWebSocket
@Configuration
public class config implements WebSocketConfigurer {
    private final static String CHAT_ENDPOINT = "/chat";
    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(getDataHandler(),CHAT_ENDPOINT).setAllowedOrigins("*");
    }
    @Bean
    DataHendler getDataHandler(){

        return new DataHendler();
    }
}
