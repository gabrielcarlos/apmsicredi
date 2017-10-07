import { Directive , ElementRef, HostListener, Input} from '@angular/core';
import { Task } from './task';

@Directive({
  selector: '[myTask]'
})
export class MyTaskDirective {

  private _myTask: Task;
  constructor(private elemento:ElementRef) {
    this.elemento.nativeElement.innerHTML += 'conteudo inserido ';
   }

   get myTask(){
     return this._myTask;
   }

   @Input()
   set myTask( value: Task){
    this._myTask = value;
    this.changeColorTask();
  }

   @HostListener('click')
   onClick(){
     alert(this.myTask.nome);
   }

   changeColorTask(){
     this.elemento.nativeElement.style.color = this.myTask.valor > 5 ? 'green' : 'red';
   }

}
