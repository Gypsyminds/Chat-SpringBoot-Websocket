package com.example.test1.Service;

import com.example.test1.Model.Message;
import com.example.test1.Repository.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageImpl implements IMessage {
    @Autowired
    private MessageRepo messageRepo;
    public Message addMessage(Message message){
        return messageRepo.save(message);
    }
}
