import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseOriginal } from '@ionic-native/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public fiebase:FirebaseOriginal) {

  }

}
