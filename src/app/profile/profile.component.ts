import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

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


  public users = [{"firstName": "Игорь", "surname": "Савин", "country": "ru"}, {
    "firstName": "Андрей",
    "surname": "Иващенко",
    "photo": "http://i.imgur.com/NktCSrP.png",
    "country": "ua"
  }, {
    "firstName": "Андрей",
    "surname": "Еременко",
    "photo": "http://i.imgur.com/OVMrkuw.png",
    "country": "ru"
  }, {"firstName": "Мария", "surname": "Мишина", "country": "ru"}, {
    "firstName": "Ростислав",
    "surname": "Сергеевич",
    "country": "ua"
  }, {
    "firstName": "Артем",
    "surname": "Насековский",
    "photo": "http://i.imgur.com/L4O3779.jpg",
    "country": "ua"
  }, {
    "firstName": "Максим",
    "surname": "Максимов",
    "photo": "http://i.imgur.com/xRmHiY3.jpg",
    "country": "ru"
  }, {
    "firstName": "Степан",
    "surname": "Жарычев",
    "photo": "http://i.imgur.com/OyltkCa.jpg",
    "country": "ru"
  }, {
    "firstName": "Александр",
    "surname": "Ширко",
    "photo": "http://i.imgur.com/Ils1CJS.jpg",
    "country": "by"
  }, {
    "firstName": "Максим",
    "surname": "Водянов",
    "photo": "http://i.imgur.com/a1vga3S.jpg",
    "country": "ru"
  }, {"firstName": "Stephan", "surname": "S.", "country": "il"}, {
    "firstName": "Дмитрий",
    "surname": "Калдузов",
    "photo": "http://i.imgur.com/cmuDqAx.png",
    "country": "ru"
  }, {
    "firstName": "Алексей",
    "surname": "Федоров",
    "photo": "http://i.imgur.com/2SCTdms.jpg",
    "country": "ru"
  }, {
    "firstName": "Artsiom",
    "surname": "Menshakou",
    "photo": "http://i.imgur.com/GpSjLDL.jpg",
    "country": "by"
  }, {"firstName": "Vladimir", "surname": "Chepkasov", "country": "ru"}, {
    "firstName": "Anna",
    "surname": "Arteeva",
    "photo": "http://i.imgur.com/g8CC1PT.jpg",
    "country": "nl"
  }, {
    "firstName": "Максим",
    "surname": "Карпинка",
    "photo": "http://i.imgur.com/AqSem9X.jpg",
    "country": "ru"
  }, {
    "firstName": "Денис",
    "surname": "Потапов",
    "photo": "http://i.imgur.com/clVT6ay.jpg",
    "country": "ru"
  }, {"firstName": "Константин", "surname": "Гришин", "photo": "http://i.imgur.com/5b0MCKb.png", "country": "ua"}]


  constructor() {
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
