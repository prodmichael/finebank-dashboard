import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavMenuModule } from '../shared/ui-kit/nav-menu/nav-menu.module';
import { AppSpacingModule } from '../shared/ui-kit/spacing/app-spacing.module';
import { UserPanelComponent } from './components/sidebar/components/user-panel/user-panel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';

@NgModule({
  declarations: [SidebarComponent, UserPanelComponent, PlatformComponent],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    MatIconModule,
    AppSpacingModule,
    NavMenuModule,
  ],
})
export class PlatformModule {}
