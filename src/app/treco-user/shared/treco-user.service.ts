import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { TrecoUserModule } from '../../modules';
import 'rxjs/add/operator/map';

@Injectable()
export class TrecoUserService {

  url: string = 'http://localhost:2001/api/TrecoUsers';

  constructor(private http: Http) { }

  getUsers(): Observable<TrecoUserModule[]> {
    return this.http.get(this.url).map(response => response.json());
  }

  createUser(user: TrecoUserModule) {
    return this.http.post(this.url, user);
  }

}
