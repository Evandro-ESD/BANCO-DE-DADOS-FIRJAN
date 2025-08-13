import { Component } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Game } from '../../entities/game';


@Component({
  selector: 'app-listar-jogos',
  imports: [],
  templateUrl: './listar-jogos.component.html',
  styleUrl: './listar-jogos.component.css'
})
export class ListarJogosComponent {

  games: Game[] = [];

  constructor(private service: CatalogoService) {

    this.service.getAll();
  }

  remover(id: number) {
    this.service.deletarGame(id)
    this.service.getAll(); // Atualiza lista
  }

}
