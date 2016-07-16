import { Component, OnInit } from '@angular/core';
import { TrecoUserModule } from '../modules';
import { TrecoUserService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-treco-user',
  templateUrl: 'treco-user.component.html',
  styleUrls: ['treco-user.component.css']
})
export class TrecoUserComponent implements OnInit {

  user: TrecoUserModule;

  constructor(private trecoUserService: TrecoUserService) {
    this.user = new TrecoUserModule();
  }

  ngOnInit() {
  }

  createUser() {
    this.trecoUserService.createUser(this.user).subscribe(response => {
      this.user = new TrecoUserModule();
    });
  }

  getUsers() {
    this.trecoUserService.getUsers().subscribe(response => console.log(response));
  }

}
