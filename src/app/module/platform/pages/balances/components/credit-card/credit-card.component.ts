import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent {
  @Input() creditCard?: any;
  constructor() {}

  hide(cardNumber: string) {
    const hiddenPart = '*'.repeat(cardNumber.length - 4);
    const visiblePart = cardNumber.slice(-4);

    return hiddenPart + visiblePart;
  }
}
