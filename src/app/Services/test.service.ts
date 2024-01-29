import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, catchError, pipe } from 'rxjs';
import { Test } from '../Models/question-qcm';
import { message } from '../Models/message';
import { user } from '../Models/user';
//import { Certification } from '../Models/cerification';
@Injectable({
  providedIn: 'root'
})
export class TestService {
 
  Url ='http://localhost:8086/qcm/qcm/1';
  Url1 ='http://localhost:8086/showqcm';
  Url2='http://localhost:8086/qcm/AddFile';
  url3 ='http://localhost:8086/showallcertif/1';
  url4='http://localhost:8086/score/1/1';
  url='http://localhost:8086/chat';
  addmessage='http://localhost:8086/feed/add';
url5='http://localhost:8086/feed/showCourse';

url6='http://localhost:8086/feed/msglast';
url7='http://localhost:8086/feed/affdate';
url71='http://localhost:8086/feed/affdate33';
url8='http://localhost:8086/feed/showall';
url9='http://localhost:8086/feed/showalluser';
url10='http://localhost:8086/feed/showuser';
url11='http://localhost:8086/feed/add2';
urllogin='http://localhost:8086/feed/login';
urllogin3='http://localhost:8086/feed';

urllogin2='http://localhost:8086/feed/loginup';
urls='http://localhost:8086/feed/logins';
urladd='http://localhost:8086/feed/adduser';
 constructor(private http :HttpClient) { }

 getAllQcms() {
   return this.http.get<message[]>(`${this.url8}`);
   
 }
 getAllusers(id :any){
  return this.http.get<user[]>(`${this.url9}/${id}`);
 }
 getlogin(param1: string, param2: string): Observable<user>{
  const url = `${this.urllogin}?param1=${param1}&param2=${param2}`;

return this.http.get<user>(url);

 }
 getcour(id :any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    })
  }
  return this.http.get<user[]>(`${this.url10}/${id}`,httpOptions);
 }
 getmessags(): Observable<string>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    })
  }
  return this.http.get<string>(`${this.url6}`,httpOptions);
 }
//gettest() {
  //return this.http.get<Certification[]>(`${this.url3}`);
//}
getDernierNom(): Observable<string> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    })
  }
  return this.http.get<string>(`${this.url7}`);
}
getDernierNom2(idsender:any,idreceiver:any): Observable<message[]> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    })
  }
  return this.http.get<message[]>(`${this.url71}/${idsender}/${idreceiver}`);
}
getscore(){
  return this.http.get(this.url4);
}
getmessage(id :any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    })
  }
  return this.http.get<message[]>(`${this.url5}/${id}`,httpOptions);
}
 getQcmById(id: number): Observable<Test> {
 
  return this.http.get<Test>(`${this.Url1}/${id}`);
}

 addReponces(reponces: any,id_qs_qcm:any){

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    })
  }
   return this.http.post(`${this.Url2}/${id_qs_qcm}/1`,reponces,httpOptions);
 }
 addlogins(n: any,p:any){

  
   return this.http.get<user>(`${this.urladd}/${n}/${p}`);
 }
 addlogin(users:any){

  return this.http.post(`${this.urllogin2}`,users) 
 }
 login(users: user): Observable<user> {
  //const url = `${this.urllogin2}`;
  return this.http.post<user>(this.urllogin2, users);
}
 add2(messages:any,id:any ,ids:any){

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    })
  }
   return this.http.post(`${this.url11}/${id}/${ids}`,messages,httpOptions);
 }
addmessages(m:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    })
  }
  return this.http.post(`${this.addmessage}`,m,httpOptions)
}
logins(username: string, password: string): Observable<string> {
    const credentials = { username, password };
    return this.http.post<string>(`${this.urls}`, credentials);
  }

loginchat(param1: string, param2: string): Observable<user> {
    const params = new HttpParams()
      .set('param1', param1)
      .set('param2', param2);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Vous pouvez ajouter des en-têtes supplémentaires au besoin
    });

    return this.http.get<user>(`${this.urllogin3}/login`, { params, headers });
  }
}
