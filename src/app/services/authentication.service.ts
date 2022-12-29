import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constants';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {



  fakeUserName : string = "username";
  fakePassword : string = "password";


  constructor() { }


  login(username:string,password:string): Observable<any>{
    if(username === this.fakeUserName && password === this.fakePassword){
      localStorage.setItem("token","mi-token-supersecreto");
      return of("ok");
    }else{
      return throwError(()=> new Error("Error"));      
    }
  }

  logout():void{
    localStorage.removeItem("token");
  }

  isLoggedIn(): boolean{
    return localStorage.getItem("token") != null;
  }



}
