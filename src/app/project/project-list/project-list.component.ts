import { Component, OnInit, Input } from '@angular/core';
import { ProjectModule, TaskModule } from '../../modules';
import { TaskService } from '../../task';

@Component({
  moduleId: module.id,
  selector: 'app-project-list',
  templateUrl: 'project-list.component.html',
  styleUrls: ['project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: ProjectModule[];

  tasks: TaskModule[];

  filteredTasks;


  constructor(private taskService: TaskService) {
    this.projects = [];
    this.filteredTasks = {};
  }

  ngOnInit() {
    this.taskService.getTask().subscribe(r => this.tasks = r);
  }

  showTasks(id) {
    this.filteredTasks = { parentId: null, filtered: [] };
    this.filteredTasks.parentId = id;
    //this.filteredTasks.push({ filtered: [] });
    console.log(this.filteredTasks);
    this.filteredTasks.filtered = this.tasks.filter(f =>
      f.projectId === id
    );


  }

}
