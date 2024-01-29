package com.example.test1.Repository;

import com.example.test1.Model.Message;
import com.example.test1.Model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo extends CrudRepository<User,Long> {

    @Query(value="select * from user where  username= :username and password= :password",nativeQuery = true)
    User login(@Param("username")String username,@Param("password")String password);
    Optional<User> findByUsername(String username);
    //Optional<User> findByUsername(String username);


    @Query(value = "select count(*) from user;", nativeQuery=true)
    int nubusers();
    @Query(value="select * from user where id_user != :id_user",nativeQuery = true)
    List<User> userconnect(@Param("id_user") Long id_user);
}
