import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverviewModalWindowComponent } from '../modules/overview-modal-window/overview-modal-window.component';

@Injectable()
export class OverviewService {
  constructor(private dialog: MatDialog) {}
  // Открытие модального окна
  openModalWindow() {
    this.dialog.open(OverviewModalWindowComponent);
  }
}
