import { Component, OnInit, Input } from '@angular/core';
import { Endereco } from '../domain/Endereco';

@Component({
  selector: 'app-detalhes-cep',
  templateUrl: './detalhes-cep.component.html',
  styleUrls: ['./detalhes-cep.component.css']
})
export class DetalhesCepComponent {

  @Input()
  endereco: Endereco;

  constructor() { }

}
