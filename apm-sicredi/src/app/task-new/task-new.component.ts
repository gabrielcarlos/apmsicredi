import { Component } from '@angular/core';
import {Task} from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent  {
  
  listaDeTarefas:Array<Task>;

  tarefa:Task = { nome: '', valor : 0};
  constructor(private taskService:TaskService){
    this.listaDeTarefas = taskService.listaDeTarefas;
  }

  adicionarTarefa() {
    let tarefa = Object.assign({}, this.tarefa);
    this.listaDeTarefas.push(tarefa);
  }
}
