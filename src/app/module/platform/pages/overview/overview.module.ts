import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { OverviewHomeComponent } from './pages/overview-home/overview-home.component';

@NgModule({
  declarations: [OverviewComponent, OverviewHomeComponent],
  imports: [CommonModule, OverviewRoutingModule],
})
export class OverviewModule {}
