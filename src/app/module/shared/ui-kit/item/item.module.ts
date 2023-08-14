import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemAmountComponent } from './components/item-amount/item-amount.component';
import { ItemContentComponent } from './components/item-content/item-content.component';
import { ItemImgComponent } from './components/item-img/item-img.component';
import { ItemComponent } from './item.component';

@NgModule({
  declarations: [
    ItemComponent,
    ItemImgComponent,
    ItemContentComponent,
    ItemAmountComponent,
  ],
  exports: [
    ItemComponent,
    ItemImgComponent,
    ItemContentComponent,
    ItemAmountComponent,
  ],
  imports: [CommonModule],
})
export class ItemModule {}
