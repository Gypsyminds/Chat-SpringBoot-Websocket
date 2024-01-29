import {Component, ElementRef,OnInit ,HostListener, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from '../Models/question-qcm';
import { TestService } from '../Services/test.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { message } from '../Models/message';
import { user } from '../Models/user';

@Component({
  selector: 'app-passage-test',
  templateUrl: './passage-test.component.html',
  styleUrls: ['./passage-test.component.css']
})
export class PassageTestComponent implements OnInit{
lurl4='http://localhost:8086/chat';
addmessage='http://localhost:8086/add';
socket!: WebSocket;
constructor( private http:HttpClient,private articleService :TestService ) {
   
 }
 conmsg:boolean= false;
conlogin:boolean = true;
ngOnInit(): void {

    //this.http.post.(`${this.url4}`)
    this.socket = new WebSocket('ws://localhost:8086/chat');

    this.socket.onopen = (event) => {
      console.log('WebSocket opened:', event);
    };
this.msg={
id:null,
contenu :null,
receiver:null,
sender:null,
dateEnvoi:null
    }
    this.users={
      idUser :null ,
      username :null ,
       PhotoProfil:null ,
      Headline:null ,
       current_position:null ,
      education:null ,
         location:null ,
       contact_info:null ,
       password:null ,
     }
  // this.affnubcours();
  // this.affcontenu();
 //  this.affcontenu2();

 // this.getusers();
   //this.getAllcours();
   //this.affnubcour();
  // this.getusers();
  this.affcontenu2();
}
msg!:message;
addReponce(m:any){

this.articleService.addmessages(this.msg).subscribe(()=>{
 //console.log(message);
// this.affcontenu2();


//   this. affnubcour();
});
}
add2(m:any,id :any,ids:any){

  this.articleService.add2(this.msg,id,ids).subscribe(()=>{
   //console.log(message);
   this.affcontenu2();
 // this.affnubcour(id);
  
  //   this. affnubcour();
  //this.affnubcour(id)
  });
  }
id :any;
listcour:any;
getAllcours(){
  
this.articleService.getAllQcms().subscribe(res => {
  this.listcour = res ;
});
}
users:any;
getusers(){
  this.articleService.getAllusers(this.idsuser).subscribe(res =>{
    this.users = res;
    console.log(this.users);
  })
}
cours :any ;
getCourbyId(id:any){
  this.articleService.getcour(id).subscribe(res =>{
this.cours = res;
console.log(this.cours.idUser);
this.affcontenu2();
  //  this.affnubcour(this.users.idUser);
  });
}

getcours(){
  
this.articleService.getAllQcms().subscribe(res => {
  this.listcour = res ;
});
}
contenulast!:any;

  affnubcours(){
    this.articleService.getmessags().subscribe(data=>{
     this.contenulast = data ;
    });
  }

  contain!:string;
  affcontenu(){
    this.articleService.getDernierNom().subscribe(data=>{
      this.contain = data ;
      console.log(data);
     });
  }
   contain2!:any;
   senderId :any; // Remplacez par l'ID de l'expéditeur
   receiverId :any;
   ids:any;
  affcontenu2(){
   
    this.articleService.getDernierNom2(this.idsuser,this.cours.idUser).subscribe(data=>{
      this.contain2 = data ;
      console.log(data);
     });
  }
  message:any;
  affnubcour(id :any){
    this.articleService.getmessage(id).subscribe(data=>{
    this.message = data ;
    console.log(this.message);
    });
  }
  param1: string = '';
param2: string = '';
idsuser!:user;
login3() {
  this.articleService.loginchat(this.param1, this.param2).subscribe(
    userId => {
      if (userId !== this.users.idUser){
        // Gérer le succès de l'authentification
        console.log('User ID:', userId);
       this.idsuser = userId;
       this.conmsg =true;
       this.getusers();
      } else {
        // Gérer l'échec de l'authentification
        console.log('User not found');
      }
    },
    error => {
      // Gérer les erreurs
      console.error('Error during login:', error);
    }
  );
}
}