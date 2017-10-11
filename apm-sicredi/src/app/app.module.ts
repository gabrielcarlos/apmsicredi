import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { TarefasModule } from './tarefas/tarefas.module';
import { CepModule } from './cep/cep.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    TarefasModule,
    CepModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
