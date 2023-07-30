import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './modal-window.component';
import { ButtonModule } from '../button/button.module';
import { MatIconModule } from '@angular/material/icon';
import { AppSpacingModule } from '../spacing/app-spacing.module';

@NgModule({
  declarations: [ModalWindowComponent],
  exports: [ModalWindowComponent],
  imports: [CommonModule, ButtonModule, MatIconModule, AppSpacingModule],
})
export class ModalWindowModule {}
