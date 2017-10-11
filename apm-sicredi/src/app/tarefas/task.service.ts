import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TaskService {

  listaDeTarefas:Array<Task>;

  constructor() { 
    this.listaDeTarefas = [];
  }



}
