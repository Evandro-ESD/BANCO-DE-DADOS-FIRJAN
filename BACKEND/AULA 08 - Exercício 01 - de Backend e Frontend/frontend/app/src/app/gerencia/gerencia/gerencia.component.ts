import { Component, inject, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Game } from '../../entities/game';
import { ModalComponent } from "../../shared/components/modal/modal.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-gerencia',
  imports: [ModalComponent, FormsModule],
  templateUrl: './gerencia.component.html',
  styleUrl: './gerencia.component.css'
})
export class GerenciaComponent implements OnInit {

  service = inject(CatalogoService)

  games: Game[] = []

  game: Game = { nome: '', tipo: '', ano: '' }

  modalVisivel: boolean = false;

  editando: boolean = false;

  ngOnInit() {
    this.carregarJogos()
  }

  carregarJogos() {
    this.service.getAll().subscribe(
      (data: Game[]) => this.games = data,
      (error) => console.error('Erro ao carregar jogos:', error)
    )
  }

  closeModal() { 
    this.modalVisivel = false;
  }
  
  openModal(game?: Game) {
  this.editando = !!game;
  this.game = game ? { ...game } : { nome: '', tipo: '', ano: '' };
  this.modalVisivel = true;
}

  
  salvarJogo(gameData: Game) {
    if (this.editando && this.game.id) {
      // Atualiza jogo existente
      const updatedGame: Game = { ...this.game, ...gameData };
      this.service.editarGame(updatedGame).subscribe(
        (data: Game) => {
          const index = this.games.findIndex(g => g.id === data.id);
          if (index !== -1) this.games[index] = data;
          this.carregarJogos()
          this.closeModal();
        },
        (error) => console.error('Erro ao atualizar jogo:', error)
      );
    } else {
      // Cria novo jogo
      this.service.createGame(gameData).subscribe(
        (data: Game) => {
          this.games.push(data);
          this.carregarJogos()
          this.closeModal();
        },
        (error) => console.error('Erro ao salvar jogo:', error)
      );
    }
  }

  editar(game: Game) { 
  this.openModal(game);
}

  excluir(id:number) { 
    this.service.deletarGame(id).subscribe(
      () => {
        this.games = this.games.filter(game => game.id !== id);
      },
      (error) => {
        console.error('Erro ao excluir jogo:', error);
      }
    );

  }
}
