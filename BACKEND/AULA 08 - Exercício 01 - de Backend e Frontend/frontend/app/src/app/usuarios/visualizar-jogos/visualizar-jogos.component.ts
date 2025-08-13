import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Game } from '../../entities/game';


@Component({
  selector: 'app-visualizar-jogos',
  imports: [CommonModule],
  templateUrl: './visualizar-jogos.component.html',
  styleUrl: './visualizar-jogos.component.css'
})
export class VisualizarJogosComponent implements OnInit {
  jogos: Game[] = []

  catalogoService = inject(CatalogoService)

  ngOnInit() {
    this.catalogoService.getAll().subscribe(
      (jogos: any[]) =>
        this.jogos = jogos
    )
  }
}
