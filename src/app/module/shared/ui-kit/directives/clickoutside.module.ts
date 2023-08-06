import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClickoutsideDirective } from './clickoutside.directive';

@NgModule({
  declarations: [ClickoutsideDirective],
  exports: [ClickoutsideDirective],
  imports: [CommonModule],
})
export class ClickoutsideModule {}
