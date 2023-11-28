import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-up-button',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './sign-up-button.component.html',
  styleUrl: './sign-up-button.component.css'
})
export class SignUpButtonComponent {
  @Input({required:true}) text!:string
  @Input({required:true})  to!:string
}
