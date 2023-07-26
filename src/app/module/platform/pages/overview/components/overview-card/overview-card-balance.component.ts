import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-card-balance',
  templateUrl: './overview-card-balance.component.html',
  styleUrls: ['./overview-card-balance.component.scss'],
})
export class OverviewCardComponent implements OnInit {
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
      number: '**** **** **** 8358',
      balance: '$53240',
    },
  ];
  indicators: number[] = Array.from({ length: this.cards.length }, (_, i) => i);
  currentIndicatorIndex: number = 0;
  maxVisibleIndicators: number = 3;
  visibleIndicators: number[] = [];

  ngOnInit() {
    this.updateVisibleIndicators();
  }

  nextCard() {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
    this.currentIndicatorIndex = this.currentCardIndex;
  }

  previousCard() {
    this.currentCardIndex =
      (this.currentCardIndex - 1 + this.cards.length) % this.cards.length;
    this.currentIndicatorIndex = this.currentCardIndex;
  }

  updateVisibleIndicators() {
    this.visibleIndicators = this.indicators.slice(
      this.currentCardIndex,
      this.currentCardIndex + this.maxVisibleIndicators
    );
  }
}
