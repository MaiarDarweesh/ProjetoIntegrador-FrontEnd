import { Component, OnInit } from '@angular/core';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(
    
    private alertas: AlertasService

  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

   /* 
validarNome() {
  let txtNome = document.querySelector("#txtNome")
  let nome = window.document.getElementById("nome")


  if (nome.value.length <= 2) {
    txtNome.innerHTML = "Nome inválido !"
    txtNome.style.color = "red"
  } else {
    txtNome.innerHTML = "Nome válido !"
    txtNome.style.color = "green"
    nomeOk = true;
  }
}

validarEmail() {
  let txtEmail = document.querySelector("#txtEmail")

  if (email.value.indexOf("@") == -1) {
    txtEmail.innerHTML = "E-mail inválido !"
    txtEmail.style.color = "red"
  } else {
    txtEmail.innerHTML = "E-mail válido !"
    txtEmail.style.color = "green"
    emailOk = true
  }
}

validarAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto")

  if (assunto.value.length >= 300) {
    txtAssunto.innerHTML = "Texto muito grande, digite no máximo 300 caracteres"
    txtAssunto.style.color = "red"
    txtAssunto.style.display = "block"

  } else {
    txtAssunto.style.display = "none"
    assuntoOk = true
  }

}
*/

  alert(){
    this.alertas.showAlertSuccess('Enviado!')
    
  } 

}
