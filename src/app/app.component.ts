import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from './project';
import { HTTP_PROVIDERS } from '@angular/http';
import { ProjectService } from './project/shared';
import { TrecoUserService } from './treco-user/shared';
import { StatusService } from './status/shared';
import { TaskService } from './task/shared';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ProjectComponent, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, ProjectService, TrecoUserService, StatusService, TaskService]
})
export class AppComponent implements OnInit {

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.statusService.getStatus().subscribe(resp => {
      if (!Array.isArray(resp) || resp.length === 0) {
        this.statusService.createStatus().subscribe();
      }
    });
  }

}
