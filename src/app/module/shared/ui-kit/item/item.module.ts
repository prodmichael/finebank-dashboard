import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemContentComponent } from './components/item-content/item-content.component';
import { ItemImgComponent } from './components/item-img/item-img.component';
import { ItemComponent } from './item.component';

@NgModule({
  declarations: [ItemComponent, ItemImgComponent, ItemContentComponent],
  exports: [ItemComponent, ItemImgComponent, ItemContentComponent],
  imports: [CommonModule],
})
export class ItemModule {}
