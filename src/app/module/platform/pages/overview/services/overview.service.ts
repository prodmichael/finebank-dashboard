import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Transaction } from '../interfaces/overview.interface';
import { OverviewModalWindowComponent } from '../modules/overview-modal-window/overview-modal-window.component';

@Injectable()
export class OverviewService {
  constructor(private http: HttpClient, private dialog: MatDialog) {}
  // Открытие модального окна
  openModalWindow() {
    this.dialog.open(OverviewModalWindowComponent);
  }

  getTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      `https://finebank-f51fe-default-rtdb.firebaseio.com/transactions/transaction.json`
    );
  }
}
