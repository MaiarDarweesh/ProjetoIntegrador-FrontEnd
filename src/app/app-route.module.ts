import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [

    {path:'' , redirectTo: 'login', pathMatch: 'full'},

    {path:'login', component: LoginComponent },
    {path:'cadastro', component: CadastroComponent },
    {path:'home', component: HomeComponent },
    {path:'sobre', component: SobreComponent },
    {path:'contato', component: ContatoComponent }  
        
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 