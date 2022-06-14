import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.component.html',
  styleUrls: ['./voluntario.component.css']
})
export class VoluntarioComponent implements OnInit {

 
  usuarioLogin: UsuarioLogin = new UsuarioLogin

  confirmarSenha: string;
  tipoVoluntario: string

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

  cadastrar() {
    this.usuarioLogin.voluntario = this.tipoVoluntario
    if (this.usuarioLogin.senha != this.confirmarSenha) {
      alert('As senhas estão diferentes')
    } else {
      this.authService.cadastrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
        this.usuarioLogin = resp
        this.router.navigate(['/login'])
        alert('Usuario cadastrado com sucesso!')
      })
    }
  }


} 