import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {

  title = 'Tarefas';
  listaDeTarefas = [];
  txtTarefa = "";

  adicionarTarefa() {
   this.listaDeTarefas.push(this.txtTarefa);
  }

}
