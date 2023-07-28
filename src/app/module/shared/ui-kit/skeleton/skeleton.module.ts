import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkeletonComponent } from './skeleton.component';

@NgModule({
  declarations: [SkeletonComponent],
  exports: [SkeletonComponent],
  imports: [CommonModule],
})
export class SkeletonModule {}
