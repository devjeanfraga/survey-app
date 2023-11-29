import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';

@Component({
  selector: 'app-view-login',
  standalone: true,
  imports: [CommonModule, LoginComponent, SignupComponent],
  templateUrl: './view-login.component.html',
  styleUrl: './view-login.component.css'
})
export class ViewLoginComponent {
  isSignUp: boolean = true;

  onLogin () {
    this.isSignUp = false; 
    console.log("login: ", this.isSignUp)
  }  

  onSignUp () {
    this.isSignUp = true; 
    console.log("sign up: ", this.isSignUp)
  }  
}
