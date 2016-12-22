import { Component, ViewChild, ElementRef,Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app works!';
public image = 'http://sdtimes.com/wp-content/uploads/2016/09/0915.sdt-angular.png'
  @ViewChild('myinput')
  public input:ElementRef

  public value:string;

  public isPortrait:boolean = true;
  public width:number = 100;
  public alt:string = 'Angular';

  public person:string = ''

  public currentPersone:any;

  public constructor(@Inject('SizeService') private _sizeService){
    console.log(this._sizeService.run())
    this.currentPersone = this.person[0]
  }

  public getValue(ev:KeyboardEvent){
    console.log(ev)
  }
}
