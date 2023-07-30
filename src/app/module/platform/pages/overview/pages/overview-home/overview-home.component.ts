import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-home',
  templateUrl: './overview-home.component.html',
  styleUrls: ['./overview-home.component.scss'],
})
export class OverviewHomeComponent implements OnInit {
  modalOpen = false;

  ngOnInit() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
