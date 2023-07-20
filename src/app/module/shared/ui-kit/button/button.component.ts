import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ButtonCustom,
  ButtonSize,
  ButtonType,
} from './interfaces/button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() size: ButtonSize = 'big';
  @Input() type: ButtonType = 'link';
  @Input() custom: ButtonCustom = '';
  @Input() rounded!: boolean;
  @Input() disabled!: boolean;
  @Input() loading!: boolean;
  @Output() press: EventEmitter<any> = new EventEmitter<any>();
}
