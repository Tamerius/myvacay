import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit }   from '@angular/core';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location }                   from '@angular/common';

import { Vacation }                   from './vacation';
import { VacationService }            from './vacation.service';

@Component({
  moduleId: module.id,
  selector: 'my-vacation-detail',
  templateUrl: './vacation-detail.component.html',
  styleUrls: [ './vacation-detail.component.css' ]
})
export class VacationDetailComponent implements OnInit {
  vacation: Vacation;

  constructor(
    private vacationService: VacationService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.vacationService.getVacation(+params['id']))
      .subscribe(vacation => this.vacation = vacation);
  }

  goBack(): void {
    this.location.back();
  }
}
