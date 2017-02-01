import { Component } from '@angular/core';

export class Vacation {
  id: number;
  name: string;
}

const VACATIONS: Vacation[] = [
  { id: 11, name: 'Overloon, The Netherlands' },
  { id: 12, name: 'Paris, France' },
  { id: 13, name: 'Terschelling, The Netherlands' },
  { id: 14, name: 'Berlin, Germany' }
];

@Component({
  selector: 'my-app',
  template:`
    <ul class="vacations">
      <li *ngFor="let vacation of vacations"
        [class.selected]="vacation === selectedvacation"
        (click)="onSelect(vacation)">
        <span class="badge">{{vacation.id}}</span> {{vacation.name}}
      </li>
    </ul>
    <div *ngIf="selectedVacation">
      <h2>{{selectedVacation.name}} details!</h2>
      <div><label>id: </label>{{selectedVacation.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedVacation.name" placeholder="name"/>
      </div>
    </div>
    `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .vacations {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 20em;
    }
    .vacations li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .vacations li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .vacations li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .vacations .text {
      position: relative;
      top: -3px;
    }
    .vacations .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
  title = 'My Vacation';
  vacations = VACATIONS;
  selectedVacation: Vacation;
  onSelect(vacation: Vacation): void {
    this.selectedVacation = vacation;
  }
}
