import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSpacingModule } from 'src/app/module/shared/ui-kit/spacing/app-spacing.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [CommonModule, AppSpacingModule],
})
export class CardModule {}
