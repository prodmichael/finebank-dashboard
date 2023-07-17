import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { ButtonComponent } from './shared/ui-kit/button/button.component';



@NgModule({
  declarations: [
    SharedComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlatformModule { }
