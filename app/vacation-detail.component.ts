import { Component, Input } from '@angular/core';

import { Vacation } from './vacation';

@Component({
  selector: 'my-vacation-detail',
  template: `
    <div *ngIf="vacation">
      <h2>{{vacation.name}} details!</h2>
      <div><label>id: </label>{{vacation.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="vacation.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class VacationDetailComponent {
  @Input()
  vacation: Vacation;
}
