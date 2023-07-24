import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSpacingModule } from 'src/app/module/shared/ui-kit/spacing/app-spacing.module';
import { CardModule } from '../../../shared/ui-kit/card/card.module';
import { HeaderModule } from '../modules/header/header.module';
import { OverviewCardComponent } from './components/overview-card/overview-card-balance.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { OverviewHomeComponent } from './pages/overview-home/overview-home.component';

@NgModule({
  declarations: [
    OverviewComponent,
    OverviewHomeComponent,
    OverviewCardComponent,
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    HeaderModule,
    AppSpacingModule,
    CardModule,
  ],
})
export class OverviewModule {}
