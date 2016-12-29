import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.map((params: {id: number}) => params.id)
      .subscribe(id => console.log(id))
    this._activatedRoute.queryParams.subscribe(query=> console.log(query))
    this._activatedRoute.data.subscribe(data=> console.log(data))
  }

  ngOnInit() {
  }

}
