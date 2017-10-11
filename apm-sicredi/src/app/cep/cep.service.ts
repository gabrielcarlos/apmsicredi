import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cep } from './cep';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CepService {

  constructor(private http:Http) {

   }

   buscarCep(cep:string) {
     return this.http.get('https://viacep.com.br/ws/'+cep+'/json')
              .toPromise()
              .then(response => {
                return this.converteRespostaParaCep(response.json());
              });
   }

   private converteRespostaParaCep(cepNaResposta) {
     let cep = new Cep();
     cep.cep = cepNaResposta.cep;
     cep.logradouro = cepNaResposta.logradouro;
     cep.complemento = cepNaResposta.complemento;
     cep.bairro = cepNaResposta.bairro;
     cep.estado = cepNaResposta.uf;
     cep.cidade = cepNaResposta.localidade;
     return cep;
   }

}
