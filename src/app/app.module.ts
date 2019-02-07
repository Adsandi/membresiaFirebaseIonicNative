import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Firebase } from '@ionic-native/firebase';
import { HomePage } from '../pages/home/home';

var config = {
  apiKey: "AIzaSyBbQPTdeetT6bteuzaRUMAaaFyJXxlUltc",
  authDomain: "pruebanube-8d38c.firebaseapp.com",
  databaseURL: "https://pruebanube-8d38c.firebaseio.com",
  projectId: "pruebanube-8d38c",
  storageBucket: "pruebanube-8d38c.appspot.com",
  messagingSenderId: "612600142016"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
