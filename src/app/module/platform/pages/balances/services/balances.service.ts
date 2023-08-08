import { Injectable, Input } from '@angular/core';
import { CreditCard } from '../interfaces/balances.interface';

@Injectable()
export class BalancesService {
  constructor() {}

  @Input() creditCards: CreditCard[] = [
    {
      img: '',
      name: 'Master Card',
      number: 3388455688608288,
      amount: 25000,
    },
    {
      img: '',
      name: 'Master Card',
      number: 6933456369339234,
      amount: 25000,
    },
    {
      img: '',
      name: 'Master Card',
      number: 3328535688408256,
      amount: 15000,
    },
    {
      img: '',
      name: 'Master Card',
      number: 3388455688608288,
      amount: 25000,
    },
    {
      img: '',
      name: 'Master Card',
      number: 2288452682638288,
      amount: 15000,
    },
  ];

  getCreditCards() {
    return this.creditCards;
  }
}
