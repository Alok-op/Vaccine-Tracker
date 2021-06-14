import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any = [];
  d = new Date().toLocaleTimeString();

  constructor(private usersService: UsersService) {
    this.usersService.getData().subscribe(vaccine => {
      console.log(vaccine);
      this.data = vaccine;
    })
  }
}
