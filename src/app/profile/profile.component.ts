import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {


  // входящие данные
  @Input()
  public person;


  // выходящие данные
  @Output()
  public choseCurrentPersone: EventEmitter<{name: string,surname: string}> = new EventEmitter()

  constructor() {
  }

  ngOnInit() {

  }


  public chose(persone: {name: string,surname: string}) {
    this.choseCurrentPersone.emit(persone)
  }
}
