import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [SharedComponent],
  exports: [SharedComponent],
  imports: [CommonModule],
})
export class SharedModule {}
