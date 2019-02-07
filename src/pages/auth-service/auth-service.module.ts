import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthServicePage } from './auth-service';

@NgModule({
  declarations: [
    AuthServicePage,
  ],
  imports: [
    IonicPageModule.forChild(AuthServicePage),
  ],
})
export class AuthServicePageModule {}
