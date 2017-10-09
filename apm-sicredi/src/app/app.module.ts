import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { MyTaskDirective } from './my-task.directive';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    FormatCurrencyPipe,
    MyTaskDirective,
    TaskNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
