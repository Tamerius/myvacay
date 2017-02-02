import { Injectable } 			from '@angular/core';
import { Http }       			from '@angular/http';
import { Observable }     		from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Vacation }           	from './vacation';

@Injectable()
export class VacationSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Vacation[]> {
    return this.http
               .get(`app/vacations/?name=${term}`)
               .map(response => response.json().data as Vacation[]);
  }
}
