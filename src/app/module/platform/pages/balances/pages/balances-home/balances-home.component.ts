import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { CreditCard } from '../../interfaces/balances.interface';
import { BalancesService } from '../../services/balances.service';

@Component({
  selector: 'app-balances-home',
  templateUrl: './balances-home.component.html',
  styleUrls: ['./balances-home.component.scss'],
})
export class BalancesHomeComponent implements OnInit {
  creditCards?: CreditCard[];

  constructor(public balancesService: BalancesService) {}

  ngOnInit() {
    this.getCreditCardsAll();
  }

  getCreditCardsAll() {
    this.balancesService
      .getCreditCards()
      .pipe(
        tap(
          (data: CreditCard[]) => {
            console.log(data);
          },
          (error) => {
            console.log('Error when receiving card data', error);
          }
        )
      )
      .subscribe();
  }
}
