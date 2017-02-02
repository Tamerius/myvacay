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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.vacationService.create(name)
      .then(vacation => {
        this.vacations.push(vacation);
        this.selectedVacation = null;
      });
  }

  delete(vacation: Vacation): void {
    this.vacationService
        .delete(vacation.id)
        .then(() => {
          this.vacations = this.vacations.filter(h => h !== vacation);
          if (this.selectedVacation === vacation) { this.selectedVacation = null; }
        });
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
