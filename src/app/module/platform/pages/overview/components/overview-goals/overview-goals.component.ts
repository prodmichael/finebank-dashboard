import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overview-goals',
  templateUrl: './overview-goals.component.html',
  styleUrls: ['./overview-goals.component.scss'],
})
export class OverviewGoalsComponent {
  @Input() loading: boolean = false;
  @Input() paymentCurrent: number = 0;
  @Input() paymentFinal: number = 0;
}
