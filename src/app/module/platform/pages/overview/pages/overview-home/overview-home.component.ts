import { Component, OnInit } from '@angular/core';
import { OverviewService } from '../../services/overview.service';

@Component({
  selector: 'app-overview-home',
  templateUrl: './overview-home.component.html',
  styleUrls: ['./overview-home.component.scss'],
})
export class OverviewHomeComponent implements OnInit {
  constructor(private overviewService: OverviewService) {}
  // Открытие модального окна при загрузке компонент
  ngOnInit() {
    // this.overviewService.openModalWindow();
  }
}
