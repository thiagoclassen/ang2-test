import { Component, OnInit } from '@angular/core';
import { TaskModule, TrecoUserModule, ProjectModule, StatusModule } from '../modules';
import { TrecoUserService } from '../treco-user/shared';
import { ProjectService } from '../project/shared';
import { StatusService } from '../status/shared';
import { TaskService } from '../task/shared';

@Component({
  moduleId: module.id,
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css']
})
export class TaskComponent implements OnInit {

  task: TaskModule;
  users: TrecoUserModule[];
  projects: ProjectModule[];
  statusList: StatusModule[];


  constructor(private taskService: TaskService,
    private statusService: StatusService,
    private userService: TrecoUserService,
    private projectService: ProjectService) {

    this.task = new TaskModule();
    this.users = [];
    this.projects = [];
    this.statusList = [];
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(response => this.users = response);
    this.projectService.getProjects().subscribe(response => this.projects = response);
    this.statusService.getStatus().subscribe(response => this.statusList = response);
  }

  onUserChange(teste) {
    this.task.trecoUserId = this.getUserByName(teste);
  }

  getProjectByName(name: string) {
    return this.projects.find(f => {
      return f.name === name;
    }).id;
  }

  getUserByName(name: string) {
    return this.users.find(f => {
      return f.username === name;
    }).id;
  }

  getStatusByLabel(label: string) {
    return this.statusList.find(f => {
      return f.label === label;
    }).id;
  }

  onProjectChange(project) {
    this.task.projectId = this.getProjectByName(project);
  }

  onStatusChange(status) {
    this.task.statusId = this.getStatusByLabel(status);
  }

  createTask() {
    this.taskService.createTask(this.task).subscribe(resp => this.task = new TaskModule());
  }

}
