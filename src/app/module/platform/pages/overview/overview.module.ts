import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BoardDateModule } from 'src/app/module/shared/ui-kit/board-date/board-date.module';
import { ButtonModule } from 'src/app/module/shared/ui-kit/button/button.module';
import { CreditCardModule } from 'src/app/module/shared/ui-kit/credit-card/credit-card.module';
import { ItemModule } from 'src/app/module/shared/ui-kit/item/item.module';
import { ModalWindowModule } from 'src/app/module/shared/ui-kit/modal-window/modal-window.module';
import { ProgressBarModule } from 'src/app/module/shared/ui-kit/progress-bar/progress-bar.module';
import { AppSpacingModule } from 'src/app/module/shared/ui-kit/spacing/app-spacing.module';
import { CardModule } from '../../../shared/ui-kit/card/card.module';
import { HeaderModule } from '../modules/header/header.module';
import { OverviewBillComponent } from './components/overview-bill/overview-bill.component';
import { OverviewBreakdownComponent } from './components/overview-breakdown/overview-breakdown.component';
import { OverviewCardComponent } from './components/overview-card/overview-card-balance.component';
import { OverviewGoalsComponent } from './components/overview-goals/overview-goals.component';
import { OverviewStatisticsComponent } from './components/overview-statistics/overview-statistics.component';
import { OverviewTransactionComponent } from './components/overview-transaction/overview-transaction.component';
import { OverviewModalWindowComponent } from './modules/overview-modal-window/overview-modal-window.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { OverviewHomeComponent } from './pages/overview-home/overview-home.component';
import { OverviewService } from './services/overview.service';
import { TabModule } from 'src/app/module/shared/ui-kit/tab/tab.module';

@NgModule({
  declarations: [
    OverviewComponent,
    OverviewHomeComponent,
    OverviewCardComponent,
    OverviewGoalsComponent,
    OverviewBillComponent,
    OverviewTransactionComponent,
    OverviewStatisticsComponent,
    OverviewBreakdownComponent,
    OverviewModalWindowComponent,
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
    ModalWindowModule,
    ItemModule,
    TabModule,
  ],
  providers: [OverviewService],
})
export class OverviewModule {}
