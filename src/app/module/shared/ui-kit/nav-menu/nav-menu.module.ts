import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavMenuComponent } from './nav-menu.component';

@NgModule({
  declarations: [NavMenuComponent],
  exports: [NavMenuComponent],
  imports: [CommonModule],
})
export class NavMenuModule {}
