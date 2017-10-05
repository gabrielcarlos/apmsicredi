import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarefas';
  listaDeTarefas = [];
  txtTarefa = "";

  adicionarTarefa() {
   this.listaDeTarefas.push(this.txtTarefa);
  }
}
