import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../interfaces/balances.interface';

@Injectable()
export class BalancesService {
  // creditCards: CreditCard[] = [];
  constructor(private http: HttpClient) {}

  getAllCreditCards(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>('api/credit-cards');
  }

  // getCreditCardId(id: number): CreditCard | undefined {
  //   return this.creditCards.find((card) => card.id === id);
  // }
}
