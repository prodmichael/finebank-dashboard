import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewcardComponent } from './new-card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardContentComponent } from './components/card-content/card-content.component';

@NgModule({
  declarations: [NewcardComponent, CardHeaderComponent, CardContentComponent],
  imports: [CommonModule],
  exports: [NewcardComponent, CardHeaderComponent, CardContentComponent],
})
export class NewcardModule {}
