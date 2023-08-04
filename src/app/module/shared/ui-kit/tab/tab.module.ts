import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { TabItemComponent } from './components/tab-item/tab-item.component';
import { TabComponent } from './tab.component';

@NgModule({
  declarations: [TabComponent, TabGroupComponent, TabItemComponent],
  exports: [TabComponent, TabGroupComponent, TabItemComponent],
  imports: [CommonModule],
})
export class TabModule {}
