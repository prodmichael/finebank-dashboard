import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditCard } from '../../interfaces/balances.interface';
import { BalancesService } from '../../services/balances.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  creditCard?: CreditCard | undefined;

  constructor(
    private route: ActivatedRoute,
    private balancesService: BalancesService
  ) {}

  ngOnInit() {
    const cardId = Number(this.route.snapshot.params['id']);
    this.creditCard = this.balancesService.getCreditCardId(cardId);
    console.log(this.creditCard);
  }
}
