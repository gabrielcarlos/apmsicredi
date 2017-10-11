import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CepService } from './cep.service';
import { CepComponent } from './cep-form/cep.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CepComponent],
  providers: [CepService],
  exports: [CepComponent]
})
export class CepModule { }
