import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() disabled: boolean = false;
  @Input() loading: boolean = true;
  @Input() type: string = 'default';
  @Input() size: string = 'normal';
  @Input() status: string = 'default';
  @Output() press: EventEmitter<any> = new EventEmitter<any>();
}
