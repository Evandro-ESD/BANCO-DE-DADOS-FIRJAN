import { Component, inject, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Game } from '../../entities/game';
import { Observable } from 'rxjs';
import { RouterOutlet } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";




@Component({
  selector: 'app-gerencia',
  imports: [RouterOutlet],
  templateUrl: './gerencia.component.html',
  styleUrl: './gerencia.component.css'
})
export class GerenciaComponent implements OnInit {

  service = inject(CatalogoService)

  games: Game[] = []

  ngOnInit() {
    this.service.getAll().subscribe(
      (data: Game[]) => {
        this.games = data;
      },
      (error) => {
        console.error('Erro ao carregar jogos:', error);
      }
    )
  }

  onSubmit() { }
  editar() { }
  excluir() { }
}
