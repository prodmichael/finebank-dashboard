import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './modal-window.component';
import { ButtonModule } from '../button/button.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ModalWindowComponent],
  exports: [ModalWindowComponent],
  imports: [CommonModule, ButtonModule, MatIconModule],
})
export class ModalWindowModule {}
