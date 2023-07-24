import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { OverviewHomeComponent } from './pages/overview-home/overview-home.component';
import { HeaderModule } from '../modules/header/header.module';
import { AppSpacingModule } from 'src/app/module/shared/ui-kit/spacing/app-spacing.module';

@NgModule({
  declarations: [OverviewComponent, OverviewHomeComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    HeaderModule,
    AppSpacingModule,
  ],
})
export class OverviewModule {}
