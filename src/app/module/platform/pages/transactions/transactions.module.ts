import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'src/app/module/shared/ui-kit/card/card.module';
import { ItemModule } from 'src/app/module/shared/ui-kit/item/item.module';
import { AppSpacingModule } from 'src/app/module/shared/ui-kit/spacing/app-spacing.module';
import { HeaderModule } from '../modules/header/header.module';
import { TransactionsHomeComponent } from './pages/transactions-home/transactions-home.component';
import { TransactionsService } from './services/transactions.service';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [TransactionsComponent, TransactionsHomeComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    HeaderModule,
    AppSpacingModule,
    CardModule,
    ItemModule,
    MatTabsModule,
  ],
  providers: [TransactionsService],
})
export class TransactionsModule {}
