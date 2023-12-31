import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreditCard } from '../../../balances/interfaces/balances.interface';
import { BalancesService } from './../../../balances/services/balances.service';

@Component({
  selector: 'app-overview-card-balance',
  templateUrl: './overview-card-balance.component.html',
  styleUrls: ['./overview-card-balance.component.scss'],
})
export class OverviewCardComponent implements OnInit, OnDestroy {
  isActive = true;
  isLoading = false;
  currentCardIndex: number = 0;
  creditCards: CreditCard[] = [];
  indicators: number[] = [];
  currentIndicatorIndex: number = 0;
  maxVisibleIndicators: number = 3;
  visibleIndicators: number[] = [0, 1, 2];
  aSub!: Subscription;

  constructor(private balancesService: BalancesService) {}

  ngOnInit() {
    this.isLoading = true;
    this.updateVisibleIndicators();
    this.getAllCreditCards();
    this.indicators = Array.from(
      { length: this.creditCards.length },
      (_, i) => i
    );
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  // Навигация слайдера
  nextCard() {
    this.currentCardIndex =
      (this.currentCardIndex + 1) % this.creditCards.length;
    this.currentIndicatorIndex = this.currentCardIndex;
  }

  previousCard() {
    this.currentCardIndex =
      (this.currentCardIndex - 1 + this.creditCards.length) %
      this.creditCards.length;
    this.currentIndicatorIndex = this.currentCardIndex;
  }

  // Показываем только 3 точки
  updateVisibleIndicators() {
    const startIndex = this.currentCardIndex;
    this.visibleIndicators = [];
    for (let i = startIndex; i < startIndex + 3; i++) {
      this.visibleIndicators.push(i % this.creditCards.length);
    }
  }

  getAllCreditCards() {
    this.aSub = this.balancesService
      .getAllCreditCards()
      .subscribe((creditCard) => {
        this.isLoading = false;
        this.creditCards = creditCard;
      });
  }
}
