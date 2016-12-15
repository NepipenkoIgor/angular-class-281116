import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersFilter'
})
export class UsersPipe implements PipeTransform {

  public transform(value: any[], name: string): any {
    if(!name){
      return value;
    }
    return value.filter(user => `${user.firstName} ${user.surname}`.indexOf(name) !== -1);
  }

}
