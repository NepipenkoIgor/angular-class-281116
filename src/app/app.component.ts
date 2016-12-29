import {Component, ViewChild, ElementRef, Inject, Directive} from '@angular/core';
import {FormControl, FormGroup, FormArray, FormBuilder, Validators, NG_ASYNC_VALIDATORS,
  NG_VALIDATORS} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

function ssnValidator(control: FormControl): {[key: string]: boolean} {
  const value = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true}
}
function nameValidator(control: FormControl): Observable<{[key: string]: boolean}> {
  const value = control.value || '';
  const valid = value.match(/^[aA-zZ]*$/);
  return Observable.of(valid ? null : {nospecial: true}).delay(5000)
}

@Directive({
  selector:'[ssn][ngModel]',
  providers:[
    {provide:NG_VALIDATORS, useValue:ssnValidator, multi:true}
    ]
})
export class SsnValidator{

}

@Directive({
  selector:'[nospecial][ngModel]',
  providers:[
    {provide:NG_ASYNC_VALIDATORS, useValue:nameValidator, multi:true}
  ]
})
export class NameValidator{

}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  public title = 'app works!';
  public image = 'http://sdtimes.com/wp-content/uploads/2016/09/0915.sdt-angular.png'
  @ViewChild('myinput')
  public input: ElementRef

  public value: string;

  public isPortrait: boolean = true;
  public width: number = 100;
  public alt: string = 'Angular';

  public person: string = ''

  public currentPersone: any;

  // public constructor(@Inject('SizeService') private _sizeService) {
  //   console.log(this._sizeService.run())
  //   this.currentPersone = this.person[0]
  // }

  public formModel: FormGroup;
  public formArrayModel: FormGroup;
  //public username: FormControl;

  // new FormGroup('',validator,asyncvalidator)
  public constructor(private _fb: FormBuilder) {
    this.formModel = this._fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      ssn: ['', this.ssnValidator],
      passwordGroup: this._fb.group({
        password: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(7)])],
        pconfirm: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(7)])],
      }, {
        // validator: this.equalValidator,
        asyncValidator: this.asyncEqualValidator
      })
    })
    // this.formModel = new FormGroup({
    //   username: new FormControl(),
    //   ssn: new FormControl(),
    //   passwordGroup: new FormGroup({
    //     password:new FormControl(),
    //     pconfirm:new FormControl(),
    //   })
    // })

    this.formArrayModel = new FormGroup({
      emails: new FormArray([new FormControl('')])
    })

    //this.username = new FormControl('Igor');


    //this.username.valueChanges
    // .debaunceTime(500)
    // .switchMap(()=> this.myservice.getSearch())
    // .subscribe((value)=>console.log(value))
  }

  public addEmail() {
    (this.formArrayModel.get('emails') as FormArray).push(new FormControl(''))
  }

  public equalValidator({value}:FormGroup): {[key: string]: boolean} {
    const [first, ...rest] = Object.keys(value || {});
    const valid = rest.every(v => value[v] === value[first])
    return valid ? null : {equal: true}
  }


  public asyncEqualValidator({value}:FormGroup): Observable<{[key: string]: boolean}> {
    const [first, ...rest] = Object.keys(value || {});
    const valid = rest.every(v => value[v] === value[first])
    return Observable.of(valid ? null : {equal: true}).delay(5000)
  }

  public ssnValidator(control: FormControl): {[key: string]: boolean} {
    const value = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : {ssn: true}
  }

  public getValue(ev: KeyboardEvent) {
    console.log(ev)
  }


  public submit(value) {
    console.log(value)
  }


}
