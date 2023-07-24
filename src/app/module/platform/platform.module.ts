import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from '../shared/ui-kit/button/button.module';
import { NavMenuModule } from '../shared/ui-kit/nav-menu/nav-menu.module';
import { ProfilePictureModule } from '../shared/ui-kit/profile-picture/profile-picture.module';
import { SearchModule } from '../shared/ui-kit/search/search.module';
import { AppSpacingModule } from '../shared/ui-kit/spacing/app-spacing.module';
import { HeaderComponent } from './components/header/header.component';
import { UserPanelComponent } from './components/sidebar/components/user-panel/user-panel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';

@NgModule({
  declarations: [
    SidebarComponent,
    UserPanelComponent,
    PlatformComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    MatIconModule,
    AppSpacingModule,
    NavMenuModule,
    ButtonModule,
    ProfilePictureModule,
    SearchModule,
  ],
})
export class PlatformModule {}
