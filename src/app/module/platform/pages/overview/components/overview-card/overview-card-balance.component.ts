import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../../../balances/interfaces/balances.interface';
import { BalancesService } from './../../../balances/services/balances.service';

@Component({
  selector: 'app-overview-card-balance',
  templateUrl: './overview-card-balance.component.html',
  styleUrls: ['./overview-card-balance.component.scss'],
})
export class OverviewCardComponent implements OnInit {
  isActive = true;
  currentCardIndex: number = 0;
  cards!: CreditCard;
  indicators: number[] = [];
  currentIndicatorIndex: number = 0;
  maxVisibleIndicators: number = 3;
  visibleIndicators: number[] = [0, 1, 2];

  constructor(private balancesService: BalancesService) {}

  ngOnInit() {
    this.updateVisibleIndicators();
    // this.cards = this.balancesService.getCreditCards().subscribe();
    // console.log(this.cards);
    // this.indicators = Array.from({ length: this.cards.length }, (_, i) => i);
  }

  // Навигация слайдера
  // nextCard() {
  //   this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
  //   this.currentIndicatorIndex = this.currentCardIndex;
  // }

  // previousCard() {
  //   this.currentCardIndex =
  //     (this.currentCardIndex - 1 + this.cards.length) % this.cards.length;
  //   this.currentIndicatorIndex = this.currentCardIndex;
  // }

  // Показываем только 3 точки
  updateVisibleIndicators() {
    // const startIndex = this.currentCardIndex;
    // this.visibleIndicators = [];
    // for (let i = startIndex; i < startIndex + 3; i++) {
    //   this.visibleIndicators.push(i % this.cards.length);
    // }
  }
}
