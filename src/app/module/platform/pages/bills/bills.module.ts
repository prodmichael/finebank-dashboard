import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BillsRoutingModule } from './bills-routing.module';
import { BillsComponent } from './bills.component';
import { BillsHomeComponent } from './pages/bills-home/bills-home.component';
import { BillsService } from './services/bills.service';

@NgModule({
  declarations: [BillsComponent, BillsHomeComponent],
  imports: [CommonModule, BillsRoutingModule],
  providers: [BillsService],
})
export class BillsModule {}
