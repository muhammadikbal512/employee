import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/module/shared.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule
  ]
})
export class LoginModule { }
