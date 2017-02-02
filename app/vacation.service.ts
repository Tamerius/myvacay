import { Vacation } from './vacation';
import { VACATIONS } from './mock-vacations';
import { Injectable } from '@angular/core';

@Injectable()
export class VacationService {
  getVacations(): Promise<Vacation[]> {
    return Promise.resolve(VACATIONS);
  }

  getVacationsSlowly(): Promise<Vacation[]> {
	return new Promise(resolve => {
	  // Simulate server latency with 2 second delay
	  setTimeout(() => resolve(this.getVacations()), 2000);
	});
  }

  getVacation(id: number): Promise<Vacation> {
    return this.getVacations()
               .then(vacations => vacations.find(vacation => vacation.id === id));
  }
}
