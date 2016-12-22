import {Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

import {ProfileService} from './profile.service'


// по чему я могу менеджерить Type,string, token from angular

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  //encapsulation:ViewEncapsulation.Native
})
export class ProfileComponent implements OnInit {



  public isActive: boolean = true;
  public width: number = 30;
  public myTemplate: number = 1;

  public time:Observable<string>= new Observable<string>((observer:Observer<string>)=>{
    setInterval(()=>observer.next(new Date().toString()),1000)
  })

  public mySelary:number = 3500.1324;
  public percent1:number = 0.23;
  public percent2:number = 1.236465;

  // входящие данные
  @Input()
  public person;


  // выходящие данные
  @Output()
  public choseCurrentPersone: EventEmitter<{name: string, surname: string}> = new EventEmitter()

  public users:any[] = [] ;


  constructor(private _profileService:ProfileService) {
    //* async ???????
    this._profileService.getUsers().subscribe(user=>this.users.push(user))
  }

  ngOnInit() {
  }

  public getUrl(url: string) {
    return `url('${url}')`
  }


  public chose(persone: {name: string, surname: string}) {
    this.choseCurrentPersone.emit(persone)
  }
}
