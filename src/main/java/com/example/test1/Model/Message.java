package com.example.test1.Model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Message implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String contenu  ;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateEnvoi;

    @ManyToOne
    User sender;
    @ManyToOne
    User receiver ;
}
