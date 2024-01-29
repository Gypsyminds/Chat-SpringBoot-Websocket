package com.example.test1.Service;

import com.example.test1.Model.Message;
import com.example.test1.Model.User;

import java.util.List;
import java.util.Optional;

public interface IMessage {
    public Message addMessage(Message message);

    public List<Message> retrieveAllCour();

    public Message retrieveCourseById(Long id);

    public List<User> retrieveAlluser(Long id);
    public User retrieveById(Long id);

    public Message addMessage2(Message message, Long idrec, Long idsend);
}