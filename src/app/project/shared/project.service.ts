import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { ProjectModule } from '../../modules';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

  url: string = 'http://localhost:2001/api/Projects';

  constructor(private http: Http) { }

  getProjects(): Observable<ProjectModule[]> {
    return this.http.get(this.url).map(response => response.json());
  }

  createProject(project: ProjectModule) {
    return this.http.post(this.url, project);
  }

}
