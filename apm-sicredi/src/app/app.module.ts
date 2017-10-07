import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { MyTaskDirective } from './my-task.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    FormatCurrencyPipe,
    MyTaskDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
