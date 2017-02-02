import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }             from './app.component';
import { DashboardComponent }       from './dashboard.component';
import { VacationsComponent }       from './vacations.component';
import { VacationDetailComponent }  from './vacation-detail.component';
import { VacationService }          from './vacation.service';
import { VacationSearchComponent }  from './vacation-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    VacationDetailComponent,
    VacationsComponent,
    VacationSearchComponent
  ],
  providers: [ VacationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
