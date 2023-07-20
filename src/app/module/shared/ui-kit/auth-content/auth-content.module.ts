import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppSpacingModule } from '../spacing/app-spacing.module';
import { AuthContentComponent } from './auth-content.component';

@NgModule({
  declarations: [AuthContentComponent],
  imports: [CommonModule, MatIconModule, AppSpacingModule],
  exports: [AuthContentComponent],
})
export class AuthContentModule {}
