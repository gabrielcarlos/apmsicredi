import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {

  listaDeTarefas = [];
  tarefa = { nome: '', valor : 0};

  adicionarTarefa() {
   let tarefa = Object.assign({}, this.tarefa);
   this.listaDeTarefas.push(tarefa);
  }

}
