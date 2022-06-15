import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  validaPagamento: string 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    // private alertas: AlertsService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  alert(){
    alert('Compra finalizada! Confira seu email.')
    this.router.navigate(['/produtos'])
  
  }

  // validarPagamento(pagamento: string){
  //   console.log(pagamento)
  // } 

  // finalizarVenda(){

  //   if(this.validaPagamento == "pix"){
  //     this.alertas.showAlertInfo("Dados enviados para processamento! Em breve você reberá um email!")
  //     this.router.navigate(['/home'])
  //   }else if(this.validaPagamento == "boleto"){
  //     this.alertas.showAlertInfo("Em breve você reberá o boleto no seu um email!")
  //     this.router.navigate(['/home'])
  //   }else{
  //     this.alertas.showAlertDanger("Selecione uma opção de pagamento!")
  //   }

  // } 
}
