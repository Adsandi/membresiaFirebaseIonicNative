
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { Firebase } from '@ionic-native/firebase';
import { AuthProvider } from '../providers/auth/auth';

var config = {
  apiKey: "AIzaSyDC1_SuYgPSsD_qmX4snaMdXy7r7aw-NyA",
  authDomain: "membresiafirebaseionic.firebaseapp.com",
  databaseURL: "https://membresiafirebaseionic.firebaseio.com",
  projectId: "membresiafirebaseionic",
  storageBucket: "membresiafirebaseionic.appspot.com",
  messagingSenderId: "570443073464"
};
Firebase.initializeApp(config);

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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
    
  ]
})
export class AppModule {}
