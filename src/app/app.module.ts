import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ContatoComponent } from './components/contato/contato.component';
import { MenuComponent } from './components/menu/menu.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SobreComponent,
    ContatoComponent,
    CadastroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
   /* ContatoComponent,
    MenuComponent,
    HomeComponent,
    CadastroComponent,*/
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
