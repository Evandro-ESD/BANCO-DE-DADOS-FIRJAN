import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() visible = false;
  @Input() title = 'Modal';
  @Output() closeModal = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  close() {
    this.visible = false;
    this.closeModal.emit();
  }
  _confirm() {
    this.confirm.emit();
    this.visible = false
  }
}
