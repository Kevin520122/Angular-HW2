import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { user } from '../interfaces/user.interface';
import { users } from '../mock-user';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  firstName: String = "";
  users: user[] = [];
  @Output() emitFirst = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.users = users
  }
  searchByFirstName(){
    this.emitFirst.emit(this.firstName);
    
  }
}
