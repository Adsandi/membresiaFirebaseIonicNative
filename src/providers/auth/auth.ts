import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';

@Injectable()
export class AuthProvider {

  constructor(public firebase:Firebase) {}

  //Este método utliza la libreria de firebase para registrar un usuario con un email y contraseña ipt
  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      Firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    });
   };

   //Si el usuario existe en la base de datos de firebase, este metodo permite acceder a la sesion de dicho usuario
   doLogin(value){
    return new Promise<any>((resolve, reject) => {
      Firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    });
   };
   doLogout(){
    return new Promise((resolve, reject) => {
      if(Firebase.auth().currentUser){
        Firebase.auth().signOut()
        .then(() => {
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }
}
