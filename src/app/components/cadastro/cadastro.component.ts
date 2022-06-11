import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioLogin } from 'src/app/model/UsuarioLogin';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin

  usuario: Usuario = new Usuario;
  confirmarSenha: string;
  tipoVoluntario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmaSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoVoluntarioo(event: any) {
    this.tipoVoluntario = event.target.value
  }

  cadastrar() {
    this.usuario.voluntario = this.tipoVoluntario
    if (this.usuario.senha != this.confirmarSenha) {
      alert('As senhas estão diferentes')
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        alert('Usuario cadastrado com sucesso!')
      })
    }
  }
} 