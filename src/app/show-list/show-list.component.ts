import { Component, OnInit } from '@angular/core';
import { user } from '../interfaces/user.interface';
import { users } from '../mock-user';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  showList: user[] = []
  fName: string = "";
  isAscending: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.showList = users;
  }
  searchByFirstName(firstName: string){
    this.fName = firstName;
  }
  setOrder(){
    this.isAscending = !this.isAscending
  }
  reset(){
    this.fName = "";
    this.isAscending = true;
  }
}
