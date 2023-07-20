import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { AuthContentComponent } from './ui-kit/auth-content/auth-content.component';

@NgModule({
  declarations: [SharedComponent],
  exports: [SharedComponent],
  imports: [CommonModule],
})
export class SharedModule {}
