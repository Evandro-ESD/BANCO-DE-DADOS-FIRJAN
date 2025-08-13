import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-visualizar-jogos',
  imports: [CommonModule],
  templateUrl: './visualizar-jogos.component.html',
  styleUrl: './visualizar-jogos.component.css'
})
export class VisualizarJogosComponent {
  jogos: any[] = []
}
