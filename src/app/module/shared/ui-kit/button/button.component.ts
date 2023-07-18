import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonSize, ButtonType } from './interfaces/button.inteface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() size: ButtonSize = 'big';
  @Input() type: ButtonType = 'link';
  @Input() rounded!: boolean;
  @Input() disabled!: boolean;
  @Input() loading!: boolean;
  @Output() press: EventEmitter<any> = new EventEmitter<any>();
}
