import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vacation } from './vacation';
import { VacationService } from './vacation.service';

@Component({
  moduleId: module.id,
  selector: 'my-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: [ './vacations.component.css' ]
})

export class VacationsComponent implements OnInit {  
  vacations: Vacation[];
  selectedVacation: Vacation;

  constructor(
    private router: Router,
    private vacationService: VacationService) { }
  
  getVacations(): void {
    this.vacationService.getVacations().then(vacations => this.vacations = vacations);
  }

  ngOnInit(): void {
  	this.getVacations();
  }

  onSelect(vacation: Vacation): void {
    this.selectedVacation = vacation;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedVacation.id]);
  }

}
