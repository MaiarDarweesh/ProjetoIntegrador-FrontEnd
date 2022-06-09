import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioLogin } from 'src/app/model/UsuarioLogin';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  usuario: Usuario = new Usuario()
  
  confirmarSenha: string
  tipoVoluntario: string
  tipoUsuario: string


  constructor(
    
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  confirmaSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoVoluntarioo(event: any) {
    this.tipoVoluntario = event.target.value
  }

  tipoUser(event: any) {

    this.tipoUsuario = event.target.value
  }

  entrar() {
    this.authService.entrar(this.usuarioLogin).subscribe({
      next: (resp: UsuarioLogin) => {
        this.usuarioLogin = resp
        environment.token = this.usuarioLogin.token
        environment.nome = this.usuarioLogin.nome
        environment.id = this.usuarioLogin.id 
        this.router.navigate(['/home'])
      },
      error: erro => {
        if (erro.status == 401) {
          alert('Usuário ou senha incorretos!')
        }
      },
    });
  }

  cadastrar() {
    this.usuario.voluntario = this.tipoVoluntario

    if(this.usuario.senha != this.confirmarSenha) {
      alert('As senhas estão diferentes')
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/home'])
        alert ('Usuario cadastrado com sucesso!')
      })
    }
  }

}

