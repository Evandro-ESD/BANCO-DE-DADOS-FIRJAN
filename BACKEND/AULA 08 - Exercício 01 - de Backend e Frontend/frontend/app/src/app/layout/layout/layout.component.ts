import { Component, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { Router } from '@angular/router';
import { CatalogoService } from '../../services/catalogo.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { Game } from '../../entities/game';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, CardComponent, ModalComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  router = inject(Router)
  service = inject(CatalogoService)
  
  ngOnInit() {
    this.service.getAll().subscribe()
  }

  @ViewChild('modal') modal!: ModalComponent;

  openModalEditar() {

  }
  closeModalEditar() {

  }

  editar(id: any, game: Game) {
    console.log('funciona!!!')
    this.service.editarGame(id, game).subscribe(
      () => console.log(game, id)
    )
  }

}
