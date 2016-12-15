import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'input[log-directive]'
})
export class InputLogDirective {

  @HostBinding('class.valid')
  public isValid:boolean = true;
  constructor() { }


  @HostListener('input',['$event'])
  public customEvent(e:KeyboardEvent){
    let el:HTMLInputElement = e.target as HTMLInputElement;
    console.log(el.value)
  }
}
