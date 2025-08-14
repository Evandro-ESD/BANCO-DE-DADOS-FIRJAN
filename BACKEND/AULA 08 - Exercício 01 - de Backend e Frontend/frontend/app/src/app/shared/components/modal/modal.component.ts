import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from '../../../entities/game';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnChanges {
  @Input() visible = false;
  @Input() title = '';
  @Input() game: { nome?: string; tipo?: string; ano?: string } | null = null;
  // @Input() game: Game | null = null;
  @Output() closed = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<{ nome: string; tipo: string; ano: string }>();

  nome = '';
  tipo = '';
  ano = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['game'] && this.game) {
      this.nome = this.game.nome ?? '';
      this.tipo = this.game.tipo ?? '';
      this.ano = this.game.ano ?? '';
    }
  }

  close() {
    this.visible = false;
    this.closed.emit();
  }

  onConfirm() {
    if (!this.nome || !this.tipo || !this.ano) return;
    this.confirm.emit({
      nome: this.nome,
      tipo: this.tipo,
      ano: this.ano
    });
    this.close();
  }
}