import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, catchError, of, tap } from 'rxjs';
import { CreditCard } from '../../interfaces/balances.interface';
import { BalancesService } from '../../services/balances.service';

@Component({
  selector: 'app-balances-home',
  templateUrl: './balances-home.component.html',
  styleUrls: ['./balances-home.component.scss'],
})
export class BalancesHomeComponent implements OnInit {
  public creditCards$ = new BehaviorSubject<CreditCard[]>([]);
  aSub!: Subscription;
  isLoading = false;
  constructor(public balancesService: BalancesService) {}

  ngOnInit() {
    this.isLoading = true;
    this.getAllCreditCards();
  }

  getAllCreditCards() {
    this.balancesService
      .getAllCreditCards()
      .pipe(
        tap(
          (resp) => {
            this.isLoading = false;
            this.creditCards$.next(resp);
          },
          catchError(() => {
            return of();
          })
        )
      )
      .subscribe();
  }
}
