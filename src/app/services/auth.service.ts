import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) { }


  singnUp(email:string,password:string){

    return this.auth.createUserWithEmailAndPassword(email,password);//returns an observable
  }

  signIn(email:string,password:string){
    return this.auth.signInWithEmailAndPassword(email,password)
  }

  //in case user exists 
  getUser(){
     return this.auth.authState//authstate it is a big object which is returned to us by firebase if we have successful signin
  }


  signOut(){
    return this.auth.signOut()
  }
}
