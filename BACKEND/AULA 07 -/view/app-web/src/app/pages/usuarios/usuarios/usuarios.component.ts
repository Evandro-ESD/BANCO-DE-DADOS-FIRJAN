import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from '../../../services/usuario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  private service = inject(UsuarioService)

  usuarios: Usuario[] = []
  usuario: Usuario = { nome: '', email: '' }
  editando: boolean = false
  idEdicao: number = 0

  // formUsuario = new FormGroup({
  //   nome: new FormControl(this.usuario.nome, [Validators.required]),
  //   email: new FormControl(this.usuario.email, [Validators.required, Validators.email])
  // });

   ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.getUsuarios().subscribe(data => this.usuarios = data)
  }
  salvar(){
    if(this.editando){
      this.service.updateUsusarios(this.idEdicao, this.usuario).subscribe(() => {
        this.editando = false;
        this.usuario = {nome: '', email: ''}
        this.listar()
      })
    }
    else{
      this.service.insertUsuarios(this.usuario).subscribe(() => {
        this.usuario = {nome: '', email: ''}
        this.listar()
      })
    }
  }
  editar(u: Usuario){
    this.usuario = {...u};
    this.idEdicao = u.id!;
    this.editando = true;
  }

  excluir(id: number){
    this.service.deleteUsuario(id).subscribe(() => this.listar())
  }

}
