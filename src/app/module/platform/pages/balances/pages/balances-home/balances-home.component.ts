import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, catchError, of, tap } from 'rxjs';
import { CreditCard } from '../../interfaces/balances.interface';
import { BalancesService } from '../../services/balances.service';

@Component({
  selector: 'app-balances-home',
  templateUrl: './balances-home.component.html',
  styleUrls: ['./balances-home.component.scss'],
})
export class BalancesHomeComponent implements OnInit, OnDestroy {
  public creditCards$ = new BehaviorSubject<CreditCard[]>([]);
  aSub!: Subscription;
  constructor(public balancesService: BalancesService) {}

  ngOnInit() {
    this.getAllCreditCards();
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  getAllCreditCards() {
    this.aSub = this.balancesService
      .getAllCreditCards()
      .pipe(
        tap(
          (resp) => {
            this.creditCards$.next(resp);
            console.log(resp);
          },
          catchError(() => {
            return of();
          })
        )
      )
      .subscribe();
  }
}
