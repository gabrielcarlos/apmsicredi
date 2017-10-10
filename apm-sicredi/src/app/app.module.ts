import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { MyTaskDirective } from './my-task.directive';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskService } from './task.service';
import { CepService } from './cep.service';
import { CepComponent } from './cep/cep.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    FormatCurrencyPipe,
    MyTaskDirective,
    TaskNewComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [TaskService, CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
