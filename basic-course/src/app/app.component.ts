import { Component } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['hagler', 'Mijail', 'Pedro', 'Luis', 'Lns'];

  name = 'Ray Sandoval';
  age = 28;
  posts = [];

  constructor(private dataService: DataService) {
    // subscribe will get a data of we taken
    this.dataService.getData().subscribe(data => this.posts = data)
  }

  addNewUser(newUser) {
    this.users.push(newUser.value)
    newUser.value = ''
    newUser.focus()
    return false;
  }

  deleteUser(user) {
    alert(`Good bye ${user}`)

    this.users.filter((element, index, array) => {
      if (element == user) {
        return this.users.splice(index, 1)
      }
    })
  }
}
