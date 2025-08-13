import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      const role = this.authService.getRole();
      if (role === 'admin') {
        this.router.navigate(['/gerencia/cadastro']);
      } else {
        this.router.navigate(['/usuarios/jogos']);
      }
    } else {
      this.error = 'Usuário ou senha inválidos';
    }
  }

}
