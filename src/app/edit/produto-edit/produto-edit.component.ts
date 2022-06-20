import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Produto } from 'src/app/model/Produto';
import { AlertasService } from 'src/app/service/alertas.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {
  
  produto: Produto = new Produto()

  constructor( 
    private produtoService: ProdutoService,
    private router: Router,
    private route:ActivatedRoute,
    private alertas: AlertasService

    ){ }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar']) 
    }
       let id = this.route.snapshot.params['id']
       this.findByIdProduto(id)
  }
  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.produto = resp 

    })


  }

  atualizar(){
    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      this.alertas.showAlertSuccess('Produto atualizado com sucesso!')
      this.router.navigate(['/produto'])


    })
  }

  
}
