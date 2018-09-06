import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	// this component havea a input of value, in this case nameUser
	// NOTE: this input need a that pattern compnent pass a input [nameUser], if not, this component show empty value
	@Input() nameUser;

  constructor() { }

  ngOnInit() {
  }

}
