package com.example.test1.Repository;

import com.example.test1.Model.Message;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepo extends CrudRepository<Message,Long> {
    @Query(value = "select id from message ORDER BY id DESC LIMIT 1;", nativeQuery=true)
    Long contenulast();
    // select contenu from message  ORDER BY DATE_FORMAT(date_envoi, '%Y-%m-%d %H:%i') ASC;
    @Query(value="select contenu from message where sender_id_user =1 ORDER BY DATE_FORMAT(date_envoi, '%Y-%m-%d %H:%i') ASC;",nativeQuery = true)
    List<String> tripardate();
    @Query(value="select contenu from message where sender_id_user=2 ORDER BY DATE_FORMAT(date_envoi, '%Y-%m-%d %H:%i') ASC;",nativeQuery = true)
    List<String> tripardate2();
    @Query(value="select * from message where (sender_id_user= :sender_id_user AND receiver_id_user= :receiver_id_user) OR (sender_id_user= :receiver_id_user AND receiver_id_user= :sender_id_user) ORDER BY DATE_FORMAT(date_envoi, '%Y-%m-%d %H:%i') ASC;",nativeQuery = true)
    List<Message> findBySenderAndReceiverOrderByDate(@Param("sender_id_user") Long sender_id_user, @Param("receiver_id_user") Long receiver_id_user);
    @Query(value="select * from message where receiver_id_user= :receiver_id_user",nativeQuery = true)
    List<Message> afficher(@Param ("receiver_id_user")Long receiver_id_user );
}
