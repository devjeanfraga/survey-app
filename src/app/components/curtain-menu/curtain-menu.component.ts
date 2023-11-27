import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataHeaderMenuLinks, dataHeaderMenuLinks } from '../../../data/data-header-menu-links';

@Component({
  selector: 'app-curtain-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curtain-menu.component.html',
  styleUrl: './curtain-menu.component.css'
})

export class CurtainMenuComponent implements OnInit{
  dataLinks: DataHeaderMenuLinks[] = dataHeaderMenuLinks;
  @Input() isOpen: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter();

  public closeMenu () {
    this.close.emit();
  }
  ngOnInit(): void {}; 
}
