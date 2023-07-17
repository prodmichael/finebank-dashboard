import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { ButtonComponent } from './shared/ui-kit/button/button.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserPanelComponent } from './components/sidebar/components/user-panel/user-panel.component';



@NgModule({
  declarations: [
    SharedComponent,
    ButtonComponent,
    SidebarComponent,
    UserPanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlatformModule { }
