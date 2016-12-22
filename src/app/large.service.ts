import { Injectable } from '@angular/core';

@Injectable()
export class LargeService {

  constructor() { }

  public run(){
    console.log('Large service ......')
  }
}
