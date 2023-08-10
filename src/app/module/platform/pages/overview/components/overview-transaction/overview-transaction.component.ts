import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Transaction } from '../../../transactions/interfaces/transactions.interface';
import { OverviewService } from './../../services/overview.service';

@Component({
  selector: 'app-overview-transaction',
  templateUrl: './overview-transaction.component.html',
  styleUrls: ['./overview-transaction.component.scss'],
})
export class OverviewTransactionComponent implements OnInit {
  public transactions$ = new BehaviorSubject<Transaction[]>([]);
  @Input() transactions = [
    {
      name: 'GTR5',
      desc: 'Gadget & Gear',
      price: '$160.00',
      date: '17 May 2023',
    },
    {
      name: 'GTR5',
      desc: 'Gadget & Gear',
      price: '$160.00',
      date: '17 May 2023',
    },
    {
      name: 'GTR5',
      desc: 'Gadget & Gear',
      price: '$160.00',
      date: '17 May 2023',
    },
    {
      name: 'GTR5',
      desc: 'Gadget & Gear',
      price: '$160.00',
      date: '17 May 2023',
    },
    {
      name: 'GTR5',
      desc: 'Gadget & Gear',
      price: '$160.00',
      date: '17 May 2023',
    },
  ];

  constructor(private overviewService: OverviewService) {}

  ngOnInit() {
    this.getTransactions();
  }

  public getTransactions() {
    this.overviewService
      .getTransaction()
      .pipe(
        tap((response) => {
          this.transactions$.next(Object.values(response));
          console.log(response);
        })
      )
      .subscribe();
  }

  selected() {}
}
