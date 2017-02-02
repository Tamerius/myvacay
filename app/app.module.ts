import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }        from './app.component';
import { VacationDetailComponent } from './vacation-detail.component';
import { VacationsComponent }     from './vacations.component';
import { VacationService }         from './vacation.service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    VacationDetailComponent,
    VacationsComponent
  ],
  providers: [
    VacationService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
