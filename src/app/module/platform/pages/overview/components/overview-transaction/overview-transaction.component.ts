import { Component, OnInit } from '@angular/core';
import { OverviewService } from './../../services/overview.service';

@Component({
  selector: 'app-overview-transaction',
  templateUrl: './overview-transaction.component.html',
  styleUrls: ['./overview-transaction.component.scss'],
})
export class OverviewTransactionComponent implements OnInit {
  // public transactions$ = new BehaviorSubject<Transaction[]>([]);
  transactions = [
    {
      name: 'GTR 5',
      desc: 'Gadget & Gear',
      price: '$160.00',
      date: '17 May 2023',
    },
    {
      name: 'GTR 5',
      desc: 'Gadget & Gear',
      price: '$160.00',
      date: '17 May 2023',
    },
    {
      name: 'GTR 5',
      desc: 'Gadget & Gear',
      price: '$160.00',
      date: '17 May 2023',
    },
    {
      name: 'GTR 5',
      desc: 'Gadget & Gear',
      price: '$160.00',
      date: '17 May 2023',
    },
    {
      name: 'GTR 5',
      desc: 'Gadget & Gear',
      price: '$160.00',
      date: '17 May 2023',
    },
  ];

  constructor(private overviewService: OverviewService) {}

  ngOnInit() {
    // this.getTransactions();
  }

  // public getTransactions() {
  //   this.overviewService
  //     .getTransaction()
  //     .pipe(
  //       tap((response) => {
  //         this.transactions$.next(Object.values(response));
  //         console.log(response);
  //       })
  //     )
  //     .subscribe();
  // }

  selected() {}
}
