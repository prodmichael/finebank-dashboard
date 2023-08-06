import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthGuard } from '../shared/services/guards/auth.guard';
import { ButtonModule } from '../shared/ui-kit/button/button.module';
import { NavMenuModule } from '../shared/ui-kit/nav-menu/nav-menu.module';
import { ProfilePictureModule } from '../shared/ui-kit/profile-picture/profile-picture.module';
import { AppSpacingModule } from '../shared/ui-kit/spacing/app-spacing.module';
import { UserPanelComponent } from './components/sidebar/components/user-panel/user-panel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BalancesComponent } from './pages/balances/balances.component';
import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';
import { ClickoutsideDirective } from '../shared/ui-kit/directives/clickoutside.directive';

@NgModule({
  declarations: [
    SidebarComponent,
    UserPanelComponent,
    PlatformComponent,
    BalancesComponent,
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    MatIconModule,
    AppSpacingModule,
    NavMenuModule,
    ButtonModule,
    ProfilePictureModule,
    MatDialogModule,
    MatMenuModule,
  ],
  providers: [AuthGuard],
})
export class PlatformModule {}
