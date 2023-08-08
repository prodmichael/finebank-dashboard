import { Component, OnInit } from '@angular/core';
import { BalancesService } from '../../services/balances.service';
import { CreditCard } from '../../interfaces/balances.interface';

@Component({
  selector: 'app-balances-home',
  templateUrl: './balances-home.component.html',
  styleUrls: ['./balances-home.component.scss'],
})
export class BalancesHomeComponent implements OnInit {
  creditCards?: CreditCard[];

  constructor(public balancesService: BalancesService) {}
  ngOnInit(): void {
    this.creditCards = this.balancesService.getCreditCards();
  }
}
