import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { MatIconModule } from '@angular/material/icon';
import { InputDirective } from '../input.directive';

@NgModule({
  declarations: [InputComponent, InputDirective],
  exports: [InputComponent],
  imports: [CommonModule, MatIconModule],
})
export class InputModule {}
