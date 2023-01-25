package com.example.test1.Controlleur;

import com.example.test1.Model.Message;
import com.example.test1.Service.IMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Controller;

@Controller
public class ChatControlleur {

    @Autowired
    IMessage iMessage;


    @MessageMapping("/add")
    public Message addMessage(@Payload Message message) {

        return iMessage.addMessage(message);
    }
}
