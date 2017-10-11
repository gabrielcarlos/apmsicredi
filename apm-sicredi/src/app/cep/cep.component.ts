import { Component, OnInit, Input } from '@angular/core';
import { CepService } from '../cep.service';
import { Cep } from './../cep';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  @Input()
  cep = new Cep();

  isLoading = false;

  constructor(private cepService:CepService) { }

  ngOnInit() {
  }

  buscar(){
    this.isLoading = true;
    this.cepService.buscarCep(this.cep.cep).then((cep:Cep) => {
      this.isLoading = false;
      this.cep = cep;})
      .catch(() => {
        alert("Não foi possível buscar o CEP.");
        this.isLoading = false;
      });
  }

}
