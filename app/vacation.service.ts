import { Injectable } from '@angular/core';
import { Vacation } from './vacation';
import { VACATIONS } from './mock-vacations';

@Injectable()
export class VacationService {
  getVacations(): Promise<Vacation[]> {
    return Promise.resolve(VACATIONS);
  }
}
