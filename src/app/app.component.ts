import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public auth: AuthService
  ){}

  title = 'projetovida';

   ngOnInit() {
  }

  aparecer(){
    let aparecer: boolean = false
  
    if(environment.paginaAtual != 'entrar' && environment.paginaAtual != 'cadastro' ){
      aparecer = true
    }
    return aparecer
  }
}

