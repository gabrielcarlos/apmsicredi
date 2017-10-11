import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskNewComponent } from './task-new/task-new.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { MyTaskDirective } from './my-task.directive';
import { TaskService } from './task.service';
import { FormatCurrencyPipe } from './format-currency.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TaskNewComponent,
    ListaTarefasComponent,
    MyTaskDirective,
    FormatCurrencyPipe],
  providers: [TaskService],
  exports: [
    TaskNewComponent,
    ListaTarefasComponent
  ]
})
export class TarefasModule { }
