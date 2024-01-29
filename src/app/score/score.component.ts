import { Component } from '@angular/core';
import { TestService } from '../Services/test.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
//import { Certification } from '../Models/cerification';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { message } from '../Models/message';
import { user } from '../Models/user';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
 // client!: Certification;
  data:any;
  datas:any;
  socket!: WebSocket;
  constructor(private articleService :TestService , private http:HttpClient, private router:Router) {
    
  }

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
    //this.getAllcours();
    //this.affnubcour();
 }
 msg!:message;
 users!:user;
 addReponce(m:any){
 
 //this.articleService.addmessages(this.msg).subscribe(()=>{
  //console.log(message);
 //   this. affnubcour();
 //});
  
 
 }
 usernames:string="";
 passwords:string="";

 
 ids:any;
 
 getlogins(){
  this.articleService.getlogin(this.username,this.password).subscribe(res => {
    this.ids =res ;
    console.log(this.ids);
  })
 }
 callExample() {
 // this.articleService.getlogin(this.users.username, this.users.password).subscribe( () =>{

  //});
 
    
}

login(){
  this.articleService.login(this.users.username).subscribe(
    (response) => {
      console.log('Login successful:', response);
      // Handle the response as needed
    },
    (error) => {
      console.error('Login failed:', error);
      // Handle the error as needed
    }
  );
}
 id :any;
 listcour:any;
 getAllcours(){
   
 this.articleService.getAllQcms().subscribe(res => {
   this.listcour = res ;
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
    senderId = 1; // Remplacez par l'ID de l'expéditeur
    receiverId = 2;
   affcontenu2(){
    
     this.articleService.getDernierNom2(this.senderId,this.receiverId).subscribe(data=>{
       this.contain2 = data ;
       console.log(data);
      });
   }
   message:any;
 //  affnubcour(){
   //  this.articleService.getmessage().subscribe(data=>{
     //this.message = data ;
     //console.log(this.message);
    // });
  // }
  username: string = '';
  password: string = '';
  logins(p:any,pp:any) {
    this.articleService.getlogin(this.param1,this.param2).subscribe(
      (response) => {
        console.log(response);
        // Gérer la redirection ou d'autres actions après une connexion réussie
      },
      (error) => {
        console.error(error);
        // Gérer les erreurs d'authentification
      }
    );
  }
  pp:any ;
loginss(p:any ,n:any){
this.articleService.addlogins(this.usernames,this.passwords).subscribe(res =>{
this.pp = res 
});
}
param1: string = '';
param2: string = '';

login3() {
  this.articleService.loginchat(this.param1, this.param2).subscribe(
    userId => {
      if (userId !== this.users.idUser){
        // Gérer le succès de l'authentification
        console.log('User ID:', userId);

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