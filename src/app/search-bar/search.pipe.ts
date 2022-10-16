import { Pipe, PipeTransform } from '@angular/core';
import { user } from '../interfaces/user.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: user[], fName: string) {
    if (fName.trim() === '') {
      return users;
    }
    let res = users.filter((user) => user.firstName === fName);
    return res
  }

}
