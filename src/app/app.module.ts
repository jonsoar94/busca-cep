import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesCepComponent } from './detalhes-cep/detalhes-cep.component';
import { CepService } from './services/cep.service';

@NgModule({
  declarations: [
    AppComponent,
    DetalhesCepComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([

    ]),
    HttpClientModule
  ],
  providers: [
    CepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
