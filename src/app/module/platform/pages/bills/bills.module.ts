import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'src/app/module/shared/ui-kit/card/card.module';
import { ItemModule } from 'src/app/module/shared/ui-kit/item/item.module';
import { AppSpacingModule } from 'src/app/module/shared/ui-kit/spacing/app-spacing.module';
import { HeaderModule } from '../modules/header/header.module';
import { BillsRoutingModule } from './bills-routing.module';
import { BillsComponent } from './bills.component';
import { BillsHomeComponent } from './pages/bills-home/bills-home.component';
import { BillsService } from './services/bills.service';

@NgModule({
  declarations: [BillsComponent, BillsHomeComponent],
  imports: [
    CommonModule,
    BillsRoutingModule,
    AppSpacingModule,
    HeaderModule,
    CardModule,
    ItemModule,
  ],
  providers: [BillsService],
})
export class BillsModule {}
