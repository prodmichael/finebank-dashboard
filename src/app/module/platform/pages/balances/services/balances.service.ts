import { Injectable } from '@angular/core';
import { CreditCard } from '../interfaces/balances.interface';

@Injectable()
export class BalancesService {
  constructor() {}

  creditCards: CreditCard[] = [
    {
      id: 1,
      img: '',
      name: 'Master Card',
      number: '3388455688608288',
      amount: 25000,
    },
    {
      id: 2,
      img: '',
      name: 'Master Card',
      number: '6933456369339234',
      amount: 25000,
    },
    {
      id: 3,
      img: '',
      name: 'Master Card',
      number: '3328535688408256',
      amount: 15000,
    },
    {
      id: 4,
      img: '',
      name: 'Master Card',
      number: '3388455688608288',
      amount: 25000,
    },
    {
      id: 5,
      img: '',
      name: 'Master Card',
      number: '2288452682638288',
      amount: 15000,
    },
  ];

  getCreditCards(): CreditCard[] {
    return this.creditCards;
  }

  getCreditCardId(id: number): CreditCard | undefined {
    return this.creditCards.find((card) => card.id === id);
  }
}
