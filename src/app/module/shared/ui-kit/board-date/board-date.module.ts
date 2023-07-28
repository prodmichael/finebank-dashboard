import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardDateComponent } from './board-date.component';

@NgModule({
  declarations: [BoardDateComponent],
  exports: [BoardDateComponent],
  imports: [CommonModule],
})
export class BoardDateModule {}
