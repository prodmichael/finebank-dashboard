import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Transaction } from '../../interfaces/overview.interface';
import { OverviewService } from './../../services/overview.service';

@Component({
  selector: 'app-overview-transaction',
  templateUrl: './overview-transaction.component.html',
  styleUrls: ['./overview-transaction.component.scss'],
})
export class OverviewTransactionComponent implements OnInit {
  public transactions$ = new BehaviorSubject<Transaction[]>([]);

  constructor(private overviewService: OverviewService) {}

  ngOnInit() {
    this.getTransactions();
  }

  public getTransactions() {
    this.overviewService
      .getTransaction()
      .pipe(
        tap((response) => {
          this.transactions$.next(response);
        })
      )
      .subscribe();
  }
}
