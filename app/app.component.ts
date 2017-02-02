import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-vacations></my-vacations>
  `
})
export class AppComponent {
  title = 'My Vacation Options';
}
