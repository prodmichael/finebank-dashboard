import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSpacingModule } from 'src/app/module/shared/ui-kit/spacing/app-spacing.module';
import { CardModule } from '../../../shared/ui-kit/card/card.module';
import { HeaderModule } from '../modules/header/header.module';
import { OverviewCardComponent } from './components/overview-card/overview-card-balance.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { OverviewHomeComponent } from './pages/overview-home/overview-home.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { ButtonModule } from 'src/app/module/shared/ui-kit/button/button.module';
import { MatIconModule } from '@angular/material/icon';
import { OverviewGoalsComponent } from './components/overview-goals/overview-goals.component';

@NgModule({
  declarations: [
    OverviewComponent,
    OverviewHomeComponent,
    OverviewCardComponent,
    CreditCardComponent,
    OverviewGoalsComponent,
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    HeaderModule,
    AppSpacingModule,
    CardModule,
    ButtonModule,
    MatIconModule,
  ],
})
export class OverviewModule {}
