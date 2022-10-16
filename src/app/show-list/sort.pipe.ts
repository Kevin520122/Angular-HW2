import { Pipe, PipeTransform } from '@angular/core';
import { user } from '../interfaces/user.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(users: user[], isAscending: boolean) {
    let res = users.sort((user1, user2) => user1.firstName > user2.firstName ? 1 : -1);
    if(isAscending){
      //Default is ascending
      return res
    }else{
      return res.reverse()
    }
  }

}
