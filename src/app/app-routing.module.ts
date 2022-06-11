import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [

  {path:'' , redirectTo: 'home', pathMatch: 'full'},


  {path:'cadastro', component: CadastroComponent },
  {path:'home', component: HomeComponent },
  {path:'sobre', component: SobreComponent},
  {path:'contato', component: ContatoComponent },
  {path:'menu', component: MenuComponent },
  {path:'rodape', component: RodapeComponent },
  {path:'produtos', component: ProdutosComponent } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

