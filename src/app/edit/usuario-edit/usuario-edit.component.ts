import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioLogin } from 'src/app/model/UsuarioLogin';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  idUsuario: number
  confirmarSenha: string;
  tipoVoluntario: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUsuario)
  }

  confirmaSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoVoluntarioo(event: any) {
    this.tipoVoluntario = event.target.value
  }

  atualizar(){
    this.usuarioLogin.voluntario = this.tipoVoluntario

    if (this.usuarioLogin.senha != this.confirmarSenha) {
      alert('As senhas estão diferentes')
    } else {
      this.authService.cadastrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
        this.usuarioLogin = resp
        this.router.navigate(['/home']) 
        alert('Usuario atualizado com sucesso! Façao login novamente.')
        environment.token = ''
        environment.nome = ''
        environment.id = 0

        this.router.navigate(['/login'])
      })
    }

  }

  findByIdUsuario(id: number){
    this.authService.usuarioById(id).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp
    })
  }

}
