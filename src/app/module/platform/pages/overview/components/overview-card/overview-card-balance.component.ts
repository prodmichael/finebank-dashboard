import { Component } from '@angular/core';

@Component({
  selector: 'app-overview-card-balance',
  templateUrl: './overview-card-balance.component.html',
  styleUrls: ['./overview-card-balance.component.scss'],
})
export class OverviewCardComponent {
  isActive = true;
  currentCardIndex: number = 0;
  cards: any[] = [
    {
      img: '',
      type: 'Credit card',
      number: '**** **** **** 2598',
      balance: '$25000',
    },
    {
      img: '',
      type: 'Debit card',
      number: '**** **** **** 2293',
      balance: '$12000',
    },
    {
      img: '',
      type: 'Credit card',
      number: '**** **** **** 8398',
      balance: '$5000',
    },
    {
      img: '',
      type: 'Debit card',
      number: '**** **** **** 5243',
      balance: '$12000',
    },
  ];

  nextCard() {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
  }

  previousCard() {
    this.currentCardIndex =
      (this.currentCardIndex - 1 + this.cards.length) % this.cards.length;
  }
}
