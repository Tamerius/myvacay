import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
     <h1>{{title}}</h1>
     <nav>
	     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
	     <a routerLink="/vacations" routerLinkActive="active">Vacations</a>
     </nav>
     <router-outlet></router-outlet>
   `,
   styleUrls: [ './dashboard.component.css' ]
})
export class AppComponent {
  title = 'My Vacation Options';
}
