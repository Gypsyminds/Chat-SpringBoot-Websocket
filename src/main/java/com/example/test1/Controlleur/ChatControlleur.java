package com.example.test1.Controlleur;

import com.example.test1.Model.Message;
import com.example.test1.Model.User;
import com.example.test1.Repository.MessageRepo;
import com.example.test1.Repository.UserRepo;
import com.example.test1.Service.IMessage;
import com.example.test1.Service.MessageImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/feed")
public class ChatControlleur {

    @Autowired
    IMessage iMessage;
    @Autowired
    MessageRepo messageRepo;
    @Autowired
    UserRepo users;
    @Autowired
    MessageImpl message;

    // @MessageMapping("/add")
    @PostMapping(value = "/add")
    public Message addMessage(@RequestBody Message message) {

        return iMessage.addMessage(message);
    }

    @PostMapping(value = "/add2/{id}/{ids}")
    public Message addMessage2(@RequestBody Message message, @PathVariable Long id,@PathVariable Long ids) {

        return iMessage.addMessage2(message, id , ids);
    }

    @GetMapping(value = "/showall")
    public List<Message> retrieveAllCourse() {

        return iMessage.retrieveAllCour();
    }

    @GetMapping(value = "/showalluser/{id}")
    public List<User> retrieveAllusers(@PathVariable Long id ) {

        return iMessage.retrieveAlluser(id);
    }

    @GetMapping(value = "/showuser/{id}")
    public User retriveProb(@PathVariable Long id) {
//Message msg = messageRepo.afficher(id).or
        return iMessage.retrieveById(id);
    }
@GetMapping(value="/adduser/{name}/{names}")
public User add(@PathVariable String  name ,@PathVariable String  names){

 return     users.login(name, names);

 //   if(logins.getUsername().equals(user.getUsername()) && logins.getPassword().equals(user.getPassword())){
      ///      return user ;
       // }else{
     //   return users.save(user);

   // }
}
    @GetMapping(value = "/showCourse/{id}")
    public List<Message> retrive(@PathVariable Long id) {
        //  Message  ids = messageRepo.afficher(id);
        return messageRepo.afficher(id);
    }

    @GetMapping(value = "/affdate")
    public List<String> tri() {
        return messageRepo.tripardate();
    }

    @GetMapping(value = "/affdate2")
    public List<String> tri2() {
        return messageRepo.tripardate2();
    }

    @GetMapping(value = "/affdate33/{senderId}/{receiverId}")
    public List<Message> tri3(@PathVariable Long senderId, @PathVariable Long receiverId) {


        return messageRepo.findBySenderAndReceiverOrderByDate(senderId, receiverId);
    }

    @GetMapping(value = "/final")
    public String finals() {
        List<String> list1 = messageRepo.tripardate();
        List<String> list = messageRepo.tripardate2();
        // List<String>   lists= list1 list;
        return "Résultat 1 : " + list + "\nRésultat 2 : " + list1;
    }

    @GetMapping(value = "/login")
    public Long logins(@RequestParam("param1") String param1, @RequestParam("param2") String param2) {
        User user = users.login(param1, param2);
        if (user.getUsername().equals(param1) && user.getPassword().equals(param2)) {
          return   user.getIdUser();
            //return user ;
        }else{
            return user.getIdUser();
        }
    }
    @PostMapping(value = "/loginup")
    public User loginss(@RequestBody User user) {

        User logins = users.login(user.getUsername(), user.getPassword());
        if (logins.getUsername().equals(user.getUsername()) && logins.getPassword().equals(user.getPassword())) {
            return user;
        }
     return user;
    }
    @PostMapping("/logins")
    public ResponseEntity<String> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        if (message.verifierAuthentification(username, password)) {
            return new ResponseEntity<>("Authentification réussie", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Authentification échouée", HttpStatus.UNAUTHORIZED);
        }
    }

}