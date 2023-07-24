import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfilePictureComponent } from './profile-picture.component';

@NgModule({
  declarations: [ProfilePictureComponent],
  exports: [ProfilePictureComponent],
  imports: [CommonModule],
})
export class ProfilePictureModule {}
