import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { OverviewModalWindowComponent } from '../modules/overview-modal-window/overview-modal-window.component';

@Injectable()
export class OverviewService {
  constructor(private http: HttpClient, private dialog: MatDialog) {}
  // Открытие модального окна
  openModalWindow() {
    this.dialog.open(OverviewModalWindowComponent);
  }

  // getTransaction(): Observable<Transaction[]> {
  //   return this.http.get<Transaction[]>();
  // }
}
