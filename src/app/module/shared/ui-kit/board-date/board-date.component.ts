import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-date',
  templateUrl: './board-date.component.html',
  styleUrls: ['./board-date.component.scss'],
})
export class BoardDateComponent {
  @Input() styles = {};
}
