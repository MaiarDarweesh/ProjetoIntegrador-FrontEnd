import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from 'src/app/model/UsuarioLogin';
import { AuthService } from 'src/app/service/auth.service';
import { session } from 'src/app/session';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrar() {
    this.auth.entrar(this.usuarioLogin).subscribe({
      next: (resp: UsuarioLogin) => {
        this.usuarioLogin = resp
        session.token = this.usuarioLogin.token
        session.nome = this.usuarioLogin.nome
        session.id = this.usuarioLogin.id 
        this.router.navigate(['/home'])
      },
      error: erro => {
        if (erro.status == 401) {
          alert('Usuário ou senha incorretos!')
        }
      },
    });
  }
} 