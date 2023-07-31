import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from '../button/button.module';
import { AppSpacingModule } from '../spacing/app-spacing.module';
import { ModalWindowComponent } from './modal-window.component';

@NgModule({
  declarations: [ModalWindowComponent],
  exports: [ModalWindowComponent],
  imports: [CommonModule, ButtonModule, MatIconModule, AppSpacingModule],
})
export class ModalWindowModule {}
