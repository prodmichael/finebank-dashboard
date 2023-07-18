import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserPanelComponent } from './components/sidebar/components/user-panel/user-panel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlatformComponent } from './platform.component';
import { PlatformRoutingModule } from './platform-routing.module';

@NgModule({
  declarations: [SidebarComponent, UserPanelComponent, PlatformComponent],
  imports: [CommonModule, PlatformRoutingModule],
})
export class PlatformModule {}
