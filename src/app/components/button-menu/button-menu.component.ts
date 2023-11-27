import { 
  Component, 
  Output, 
  EventEmitter, 
  ViewChildren, 
  ElementRef, 
  AfterViewInit,
  QueryList
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.css'
})
export class ButtonMenuComponent {
  isHovered: boolean = false;
  @Output() clicked = new EventEmitter<void>();
  public buttonMenuClicked () {
    this.clicked.emit();
  }

  toggleHover () {
    this.isHovered = !this.isHovered;
  }
  // onMouseEnter () {
  //   this.isHovered = true; 
  // }

  // onMouseLeave () {
  //   this.isHovered = true; 
  // }
};
 