import { Component, OnInit } from '@angular/core';
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
    this.creditCards = this.balancesService.getCreditCards();
  }
}
