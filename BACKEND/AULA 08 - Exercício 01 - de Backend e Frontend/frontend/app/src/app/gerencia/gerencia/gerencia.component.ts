import { Component, inject, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Game } from '../../entities/game';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-gerencia',
  imports: [],
  templateUrl: './gerencia.component.html',
  styleUrl: './gerencia.component.css'
})
export class GerenciaComponent implements OnInit {
  
  service = inject(CatalogoService)

  games: Game[] = []

  ngOnInit() {
      this.service.getAll().subscribe()
  }
}
