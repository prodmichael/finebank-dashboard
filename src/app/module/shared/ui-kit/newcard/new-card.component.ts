import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
})
export class NewcardComponent {
  @Input() width?: string;
  @Input() marginBottom?: string;
}
