import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {TaskModule } from '../../modules';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  url: string = 'http://localhost:2001/api/Tasks';

  constructor(private http: Http) { }

  getTask(): Observable<TaskModule[]> {
    return this.http.get(this.url).map(response => response.json());
  }

  getTaskById(id: number): Observable<TaskModule[]> {
    return this.http.get(this.url + '/' + id).map(response => response.json());
  }

  createTask(status: TaskModule) {
    return this.http.post(this.url, status);
  }

}
