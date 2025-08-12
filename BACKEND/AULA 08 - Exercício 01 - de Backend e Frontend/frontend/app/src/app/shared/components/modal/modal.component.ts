import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  mostrar = false
  @Input() titulo: string = ''
  @Output() close = new EventEmitter<void>()

  open() {
    this.mostrar = true
  }
  closeModal() {
    this.mostrar = true
    this.close.emit()
  }

}
