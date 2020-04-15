import { Component } from '@angular/core';
import { Endereco } from './domain/Endereco'
import { CepService } from './services/cep.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  enderecoEncontrado: Endereco;

  constructor(private cepService: CepService) {

  }

  onClickSearchEndereco(cep: string) {
    cep = cep.replace('-', '');

    if(this.verificarCep(cep)) {
      this.cepService.getEndereco(cep)
        .subscribe(endereco => {
          this.enderecoEncontrado = endereco;
          console.log(endereco);
        }, 
          error => {
            console.log("Ocorreu um erro ao buscar CEP")
          }
        )
    } else {
      console.log("CEP incorreto, favor inserir um cep válido!");
    }
  }

  verificarCep(cep: string) : boolean {
    return cep.length == 8 ? true : false;
  }
}
