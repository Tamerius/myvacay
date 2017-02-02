import { Component, OnInit } from '@angular/core';

import { Vacation } from './vacation';
import { VacationService } from './vacation.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	vacations: Vacation[] = [];

	constructor(private vacationService: VacationService) { }

	ngOnInit(): void {
	  this.vacationService.getVacations()
	    .then(vacations => this.vacations = vacations.slice(1, 5))
	}
}
