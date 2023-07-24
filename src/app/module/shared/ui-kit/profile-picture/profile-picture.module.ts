import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProfilePictureComponent } from './profile-picture.component';

@NgModule({
  declarations: [ProfilePictureComponent],
  exports: [ProfilePictureComponent],
  imports: [CommonModule, MatIconModule],
})
export class ProfilePictureModule {}
