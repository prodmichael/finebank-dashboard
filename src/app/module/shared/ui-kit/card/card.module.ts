import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardContentComponent } from './components/card-content/card-content.component';

@NgModule({
  declarations: [CardComponent, CardHeaderComponent, CardContentComponent],
  imports: [CommonModule],
  exports: [CardComponent, CardHeaderComponent, CardContentComponent],
})
export class CardModule {}
