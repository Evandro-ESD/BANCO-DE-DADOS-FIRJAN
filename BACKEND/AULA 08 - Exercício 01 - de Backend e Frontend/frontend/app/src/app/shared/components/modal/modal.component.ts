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

  inputNome: string = ''
  inputTipo: string = ''
  inputAno: string = ''

  @Input() titulo: string = ''
  @Output() close = new EventEmitter<void>()
  @Output() confirm = new EventEmitter<{ inputNome: string, inputTipo: string, inputAno: string }>()

  open() {
    this.mostrar = true
    this.inputNome = ''
    this.inputTipo = ''
    this.inputAno = ''
  }
  closeModal() {
    this.mostrar = true
    this.close.emit()
  }
  confirmar() {
    this.confirm.emit({ inputNome: this.inputNome, inputTipo: this.inputTipo, inputAno: this.inputAno });

    this.confirm.emit()
  }

}
