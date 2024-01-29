package com.example.test1.Service;

import com.example.test1.Model.Message;
import com.example.test1.Model.User;
import com.example.test1.Repository.MessageRepo;
import com.example.test1.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class MessageImpl implements IMessage {
    @Autowired
    private MessageRepo messageRepo;
    @Autowired
    UserRepo users;

    @Override
    public Message addMessage(Message message){
        // User id = users.findById(receiver).orElse(null);
        Long senders = 1L ;
        User send  = users.findById(senders).orElse(null);
//User recu = users.findById(idrec).orElse(null);
        message.setSender(send);
        //message.setReceiver(recu);
        message.setDateEnvoi(new Date());
        //message.setSender(1L);
        // message.getSender().setIdUser(2L);
        // message.setSender(1L);

        return messageRepo.save(message);
    }
    @Override
    public Message addMessage2(Message message  ,Long idrec ,Long idsend  ){

        //Long senders = 1L ;
        User send  = users.findById(idsend).orElse(null);
        User recu = users.findById(idrec).orElse(null);
        message.setSender(send);
        message.setReceiver(recu);
        message.setDateEnvoi(new Date());
        //message.setSender(1L);
        // message.getSender().setIdUser(2L);
        // message.setSender(1L);

        return messageRepo.save(message);
    }
    @Override
    public List<Message> retrieveAllCour() {

        return (List<Message>) messageRepo.findAll();
    }
    @Override
    public Message retrieveCourseById(Long id) {

        return messageRepo.findById(id).get();
    }

    @Override
    public List<User> retrieveAlluser(Long id) {

        return (List<User>) users.userconnect(id);
    }
    @Override
    public User retrieveById(Long id) {

        return users.findById(id).get();
    }
    public boolean verifierAuthentification(String username, String password) {
        Optional<User> utilisateurOptional = users.findByUsername(username);

        return utilisateurOptional.map(utilisateur -> utilisateur.getPassword().equals(password)).orElse(false);
    }



}
