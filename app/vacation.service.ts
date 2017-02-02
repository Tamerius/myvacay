import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Vacation } from './vacation';


@Injectable()
export class VacationService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private vacationsUrl = 'api/vacations';  // URL to web api

  constructor(private http: Http) { }

  getVacations(): Promise<Vacation[]> {
    return this.http.get(this.vacationsUrl)
               .toPromise()
               .then(response => response.json().data as Vacation[])
               .catch(this.handleError);
  }

  getVacation(id: number): Promise<Vacation> {
    const url = `${this.vacationsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Vacation)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getVacationsSlowly(): Promise<Vacation[]> {
	return new Promise(resolve => {
	  // Simulate server latency with 2 second delay
	  setTimeout(() => resolve(this.getVacations()), 2000);
	});
  }

  create(name: string, reason: string, disadvantage: string): Promise<Vacation> {
    return this.http
      .post(this.vacationsUrl, JSON.stringify({name: name, reason: reason, disadvantage: disadvantage}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(vacation: Vacation): Promise<Vacation> {
    const url = `${this.vacationsUrl}/${vacation.id}`;
    return this.http
      .put(url, JSON.stringify(vacation), {headers: this.headers})
      .toPromise()
      .then(() => vacation)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.vacationsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
