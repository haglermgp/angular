import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular crud';

  msg:string = '';

  employees = [
  	{'name': 'hagler', 'email': 'hagler@gmail.com' position: 'manager'},
  	{'name': 'Lui', 'email': 'Lui@gmail.com' position: 'worker'},
  	{'name': 'Filip', 'email': 'Filip@gmail.com' position: 'designer'}
  ]

  model:any = {};
  model2:any = {};

  addEmployee(newUser):void {
    this.employees.push(this.model);
    this.model = {}
    newUser.focus()
    this.msg = 'The employe was added'
  }

  deleteEmployee(i):void {
    var answer = confirm('are you sure delete this employee')
    if (answer) {
      // code...
      this.employees.splice(i, 1)
      this.msg = 'The employe was deleted : ' + this.employees[i].name
    }
  }

  // this method prapare the edition of one employee (this can't show the result)
  myValue;
  editEmployee(i):void {
    this.model2.name = this.employees[i].name
    this.model2.email = this.employees[i].email
    this.model2.position = this.employees[i].position
    this.myValue = i
  }

  updateEmployee():void {
    this.employees[this.myValue].name = this.model2.name
    this.employees[this.myValue].email = this.model2.email
    this.employees[this.myValue].position = this.model2.position
    this.msg = 'The employe was updated'
  }

  closeAlert() {
    this.msg = ''
    return false
  }
}
