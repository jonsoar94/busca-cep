import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from '../domain/Endereco';

@Injectable()
export class CepService {

    constructor(private httpClient: HttpClient) {
    }

    getEndereco(cep: string) : Observable<Endereco> {
        return this.httpClient.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
    }
}