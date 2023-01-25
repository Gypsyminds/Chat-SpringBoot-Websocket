package com.example.test1.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;
    private String name;
    private String PhotoProfil;
    private String Headline;
    private String current_position;
    private String education;
    private String location;
    private String contact_info;

   @OneToMany(mappedBy = "sender")
    @JsonIgnore
    private Set<Message> messages1;

   @OneToMany(mappedBy = "receiver")
   @JsonIgnore
   private Set<Message> messages2;
}
