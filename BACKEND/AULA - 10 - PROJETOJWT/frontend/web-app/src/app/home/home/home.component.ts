import { AuthService } from '../../services/auth.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  login = ''
  senha = ''
  error = ''

  private auth = inject(AuthService)
  private router = inject(Router)

  onLogin(event: Event) {
    event.preventDefault();

    this.auth.login(this.login, this.senha).subscribe({
      next: (res) => {
        this.error = ''
        if (res.role === 'admin') this.router.navigate(['/admin'])
        else this.router.navigate(['/user'])
      },
      error: (err) => {
        this.error = err.error.messagem || 'Erro ao fazer login'
      }
    })
  }
}
