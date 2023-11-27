import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.css'
})
export class ButtonComponent {
  @Input({required:true}) text!:string
  @Input({required:true})  to!:string
}
