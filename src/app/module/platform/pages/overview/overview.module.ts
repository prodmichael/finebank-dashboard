import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BoardDateModule } from 'src/app/module/shared/ui-kit/board-date/board-date.module';
import { ButtonModule } from 'src/app/module/shared/ui-kit/button/button.module';
import { CreditCardModule } from 'src/app/module/shared/ui-kit/credit-card/credit-card.module';
import { ItemModule } from 'src/app/module/shared/ui-kit/item/item.module';
import { ProgressBarModule } from 'src/app/module/shared/ui-kit/progress-bar/progress-bar.module';
import { AppSpacingModule } from 'src/app/module/shared/ui-kit/spacing/app-spacing.module';
import { CardModule } from '../../../shared/ui-kit/card/card.module';
import { HeaderModule } from '../modules/header/header.module';
import { OverviewBillComponent } from './components/overview-bill/overview-bill.component';
import { OverviewCardComponent } from './components/overview-card/overview-card-balance.component';
import { OverviewGoalsComponent } from './components/overview-goals/overview-goals.component';
import { OverviewTransactionComponent } from './components/overview-transaction/overview-transaction.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { OverviewHomeComponent } from './pages/overview-home/overview-home.component';

@NgModule({
  declarations: [
    OverviewComponent,
    OverviewHomeComponent,
    OverviewCardComponent,
    OverviewGoalsComponent,
    OverviewBillComponent,
    OverviewTransactionComponent,
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    HeaderModule,
    AppSpacingModule,
    CardModule,
    ButtonModule,
    MatIconModule,
    ProgressBarModule,
    BoardDateModule,
    CreditCardModule,
    MatTabsModule,
    ItemModule,
  ],
})
export class OverviewModule {}
