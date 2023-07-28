import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar.component';
import { SkeletonModule } from '../skeleton/skeleton.module';

@NgModule({
  declarations: [ProgressBarComponent],
  exports: [ProgressBarComponent],
  imports: [CommonModule, SkeletonModule],
})
export class ProgressBarModule {}
