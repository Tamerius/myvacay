import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }             from './app.component';
import { DashboardComponent }       from './dashboard.component';
import { VacationDetailComponent }  from './vacation-detail.component';
import { VacationsComponent }       from './vacations.component';
import { VacationService }          from './vacation.service';

import { AppRoutingModule }         from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    VacationDetailComponent,
    VacationsComponent
  ],
  providers: [
    VacationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
