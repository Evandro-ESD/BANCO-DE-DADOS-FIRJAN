import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { Router } from '@angular/router';
import { CatalogoService } from '../../services/catalogo.service';
import { CardComponent } from '../../shared/components/card/card.component';


@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, CardComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  router = inject(Router)
  service = inject(CatalogoService)

  navigate(route: string){
    this.router.navigate([route])
  }

  ngOnInit() {
    this.service.getAll().subscribe()
  }

}
