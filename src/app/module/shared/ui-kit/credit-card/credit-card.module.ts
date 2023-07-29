import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreditCardComponent } from './credit-card.component';

@NgModule({
  declarations: [CreditCardComponent],
  exports: [CreditCardComponent],
  imports: [CommonModule],
})
export class CreditCardModule {}
