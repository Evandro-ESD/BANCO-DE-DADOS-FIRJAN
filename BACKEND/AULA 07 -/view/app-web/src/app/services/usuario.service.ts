import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Usuario {
  id?: number
  nome?: string
  email?: string
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private http = inject(HttpClient)
  private api = 'http://localhost:3012/api/usuarios'

  constructor() { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.api)
  }

  insertUsuarios(usuario: Usuario): Observable<Usuario> {
    return this.http.post(this.api, usuario)
  }

  updateUsusarios(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put(this.api + '/' + id, usuario)
  }

  deleteUsuarios(id: number): Observable<any> {
    return this.http.delete(this.api + '/' + id)
  }

}

