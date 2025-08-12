import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Game } from '../entities/game';
import { environment } from '../../environments/environment.development';
import { Observable, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  listaJogos: Game[] = []

  http = inject(HttpClient)

  constructor() { }

  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(environment.apiUrl)
      .pipe(tap((games) => {
        this.listaJogos = games
        console.log(this.listaJogos)
      }))
  }

  createGame(game: Game): Observable<Game> {
    return this.http.post(environment.apiUrl, game)
  }

  editarGame(id: number, game: Game): Observable<Game> {
    return this.http.put(`${environment.apiUrl}${id}`, game)
  }

  deletarGame(id: number) {
    return this.http.delete(`${environment.apiUrl}${id}`)
  }



}
