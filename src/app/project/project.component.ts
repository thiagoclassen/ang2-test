import { Component, OnInit } from '@angular/core';
import { ProjectModule } from '../modules';
import { ProjectService } from './shared';
import { ProjectListComponent } from './project-list';

@Component({
  moduleId: module.id,
  selector: 'app-project',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.css'],
  directives: [ProjectListComponent]

})
export class ProjectComponent implements OnInit {

  project: ProjectModule;
  projects: ProjectModule[];

  constructor(protected projectService: ProjectService) {
    this.project = new ProjectModule();
  }

  ngOnInit() {
    this.projects = [];
    this.getProjects();
  }

  createProject() {
    this.projectService.createProject(this.project).subscribe(response => {
      this.getProjects();
      console.log(response.json());
      this.project = new ProjectModule();
    });
  }

  getProjects() {
    this.projectService.getProjects().subscribe(response => this.projects = response);
  }

}
