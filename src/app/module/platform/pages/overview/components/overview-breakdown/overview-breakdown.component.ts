import { Component, Input } from '@angular/core';
import { Breakdown } from '../../interfaces/overview.interface';

@Component({
  selector: 'app-overview-breakdown',
  templateUrl: './overview-breakdown.component.html',
  styleUrls: ['./overview-breakdown.component.scss'],
})
export class OverviewBreakdownComponent {
  @Input() breakdowns: Breakdown[] = [
    {
      id: '1',
      image: '',
      name: 'Housting',
      price: 250,
      condition: 15,
    },
    {
      id: '2',
      image: '',
      name: 'Food',
      price: 350,
      condition: 0.8,
    },
    {
      id: '3',
      image: '',
      name: 'Transportation',
      price: 50,
      condition: 12,
    },
  ];
}
