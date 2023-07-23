import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavMenuSize } from './interfaces/nav-menu.interface';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  @Input() size: NavMenuSize = 'normal';
  @Output() press: EventEmitter<any> = new EventEmitter<any>();
}
