import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input({ required: true }) titulo!: string 
  @Input({ required: true }) tipo!: string
  @Input({ required: true }) ano!: string
  @Input({ required: true }) btnEditar!: string
  @Input({ required: true }) btnExcluir!: string

  @Output() funcao = new EventEmitter()

  funcaoEmit() {
    let test = this.funcao.emit('FUNCIONA!')
    console.log(test)
  }
}
