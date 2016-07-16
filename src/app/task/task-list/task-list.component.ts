import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared';
import { TaskModule } from '../../modules';
import { StatusService } from '../../status';

@Component({
  moduleId: module.id,
  selector: 'app-task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: TaskModule[];

  constructor(private taskService: TaskService, protected statusService: StatusService) {
    this.tasks = [];
  }

  ngOnInit() {
    this.taskService.getTask().subscribe(resp => this.tasks = resp);
  }

  getStatus(id) {
    this.statusService.getStatusById(id).subscribe(r => { return r; });
  }

}
