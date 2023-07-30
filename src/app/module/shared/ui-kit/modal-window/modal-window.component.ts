import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent {
  @Input() isOpen: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
    this.closeModalEvent.emit();
  }
}
