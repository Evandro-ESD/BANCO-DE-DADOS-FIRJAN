import { Component } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Game } from '../../entities/game';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listar-jogos',
  imports: [ModalComponent, FormsModule, CommonModule],
  templateUrl: './listar-jogos.component.html',
  styleUrl: './listar-jogos.component.css'
})
export class ListarJogosComponent {

  games: Game[] = [];
  modalVisivel = false;
  modalTitulo = 'Novo Jogo';
  jogo: Game = { nome: '', tipo: '', ano: '' };
  editando = false;

  constructor(private catalogoService: CatalogoService) { }

  abrirModal(game?: Game) {
    if (game) {
      this.jogo = { ...game };
      this.modalTitulo = 'Editar Jogo';
      this.editando = true;
    } else {
      this.jogo = { nome: '', tipo: '', ano: '' };
      this.modalTitulo = 'Novo Jogo';
      this.editando = false;
    }
    this.modalVisivel = true;
  }

  fecharModal() {
    this.modalVisivel = false;
  }

  salvar() {
  if (this.editando) {
    this.catalogoService.editarGame(this.jogo.id!, this.jogo)
      .subscribe(() => {
        this.catalogoService.getAll().subscribe(games => {
          this.games = games;
        });
        this.fecharModal();
      });
  } else {
    this.catalogoService.createGame(this.jogo)
      .subscribe(() => {
        this.catalogoService.getAll().subscribe(games => {
          this.games = games;
        });
        this.fecharModal();
      });
  }
}


  remover(id: number) {
    this.catalogoService.deletarGame(id).subscribe();
    this.catalogoService.getAll().subscribe();
  }

}
