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
  creditCard?: CreditCard;

  constructor(
    private route: ActivatedRoute,
    private balancesService: BalancesService
  ) {}

  ngOnInit() {
    const cardId = this.route.snapshot.params['id'];
    this.balancesService.getCreditCardsById(cardId).subscribe(
      (card) => {
        this.creditCard = card;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
