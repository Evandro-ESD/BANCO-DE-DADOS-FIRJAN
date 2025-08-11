import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from '../../../services/usuario.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  private service = inject(UsuarioService)

  usuarios: Usuario[] = []
  usuario: Usuario = { nome: '', email: '' }
  ediatando: boolean = false
  idEdicao: number = 0

  formUsuario = new FormGroup({
    nome: new FormControl(this.usuario.nome),
    email: new FormControl(this.usuario.email)
  });

  ngOnInit(): void {
    this.listar()
    console.log(this.formUsuario.value)
  }

  listar() {
    this.service.getUsuarios()
      .subscribe(data => data.map(usuario => this.usuarios.push(usuario)))
  }

  salvar() {
    this.service.insertUsuarios(this.usuario)
  }

  editar() { }

  excluir() { }

}
