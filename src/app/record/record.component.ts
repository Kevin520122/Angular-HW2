import { Component, OnInit, Input} from '@angular/core';
import { user } from '../interfaces/user.interface';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @Input() record!: user
  constructor() { }

  ngOnInit(): void {
  
  }

}
