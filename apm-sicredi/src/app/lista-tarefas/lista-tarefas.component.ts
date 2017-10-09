import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {

  listaDeTarefas;

  constructor(private taskService:TaskService){
    this.listaDeTarefas = taskService.listaDeTarefas;
  }

}
