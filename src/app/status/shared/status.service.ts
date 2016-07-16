import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {StatusModule } from '../../modules';
import 'rxjs/add/operator/map';

@Injectable()
export class StatusService {

  url: string = 'http://localhost:2001/api/StatusList';

  status = [new StatusModule('TODO'), new StatusModule('Doing'), new StatusModule('Review'), new StatusModule('Done')];

  constructor(private http: Http) {}

  getStatus(): Observable<StatusModule[]> {
    return this.http.get(this.url).map(response => response.json());
  }

  createStatus() {
    return this.http.post(this.url, this.status);
  }

  getStatusById(id: number): Observable<StatusModule[]> {
    return this.http.get(this.url + '/' + id).map(response => response.json());
  }

}
