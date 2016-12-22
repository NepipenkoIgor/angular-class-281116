import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {token} from '../tokens'

@Injectable()
export class ProfileService {

  constructor(private _http: Http, @Inject(token) private url) {
  }

  public getUsers(): Observable<any> {

    return this._http.get(`${this.url}courses/groups/api/participants?key=8k5pxi`)
      .map(res => res.json()) // [user1,user2] -> --user1--user-2
      .mergeMap(users => Observable.from(users).filter((user: any) => user.photo))
      .catch(err => Observable.of([]))

    // return [{"firstName": "Игорь", "surname": "Савин", "country": "ru"}, {
    //   "firstName": "Андрей",
    //   "surname": "Иващенко",
    //   "photo": "http://i.imgur.com/NktCSrP.png",
    //   "country": "ua"
    // }, {
    //   "firstName": "Андрей",
    //   "surname": "Еременко",
    //   "photo": "http://i.imgur.com/OVMrkuw.png",
    //   "country": "ru"
    // }, {"firstName": "Мария", "surname": "Мишина", "country": "ru"}, {
    //   "firstName": "Ростислав",
    //   "surname": "Сергеевич",
    //   "country": "ua"
    // }, {
    //   "firstName": "Артем",
    //   "surname": "Насековский",
    //   "photo": "http://i.imgur.com/L4O3779.jpg",
    //   "country": "ua"
    // }, {
    //   "firstName": "Максим",
    //   "surname": "Максимов",
    //   "photo": "http://i.imgur.com/xRmHiY3.jpg",
    //   "country": "ru"
    // }, {
    //   "firstName": "Степан",
    //   "surname": "Жарычев",
    //   "photo": "http://i.imgur.com/OyltkCa.jpg",
    //   "country": "ru"
    // }, {
    //   "firstName": "Александр",
    //   "surname": "Ширко",
    //   "photo": "http://i.imgur.com/Ils1CJS.jpg",
    //   "country": "by"
    // }, {
    //   "firstName": "Максим",
    //   "surname": "Водянов",
    //   "photo": "http://i.imgur.com/a1vga3S.jpg",
    //   "country": "ru"
    // }, {"firstName": "Stephan", "surname": "S.", "country": "il"}, {
    //   "firstName": "Дмитрий",
    //   "surname": "Калдузов",
    //   "photo": "http://i.imgur.com/cmuDqAx.png",
    //   "country": "ru"
    // }, {
    //   "firstName": "Алексей",
    //   "surname": "Федоров",
    //   "photo": "http://i.imgur.com/2SCTdms.jpg",
    //   "country": "ru"
    // }, {
    //   "firstName": "Artsiom",
    //   "surname": "Menshakou",
    //   "photo": "http://i.imgur.com/GpSjLDL.jpg",
    //   "country": "by"
    // }, {"firstName": "Vladimir", "surname": "Chepkasov", "country": "ru"}, {
    //   "firstName": "Anna",
    //   "surname": "Arteeva",
    //   "photo": "http://i.imgur.com/g8CC1PT.jpg",
    //   "country": "nl"
    // }, {
    //   "firstName": "Максим",
    //   "surname": "Карпинка",
    //   "photo": "http://i.imgur.com/AqSem9X.jpg",
    //   "country": "ru"
    // }, {
    //   "firstName": "Денис",
    //   "surname": "Потапов",
    //   "photo": "http://i.imgur.com/clVT6ay.jpg",
    //   "country": "ru"
    // }, {"firstName": "Константин", "surname": "Гришин", "photo": "http://i.imgur.com/5b0MCKb.png", "country": "ua"}]
  }

}
