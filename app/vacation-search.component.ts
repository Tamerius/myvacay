import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { VacationSearchService } from './vacation-search.service';
import { Vacation } from './vacation';

@Component({
  moduleId: module.id,
  selector: 'vacation-search',
  templateUrl: './vacation-search.component.html',
  styleUrls: [ './vacation-search.component.css' ],
  providers: [VacationSearchService]
})
export class VacationSearchComponent implements OnInit {
  vacations: Observable<Vacation[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private vacationSearchService: VacationSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.vacations = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.vacationSearchService.search(term)
        // or the observable of empty vacations if there was no search term
        : Observable.of<Vacation[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Vacation[]>([]);
      });
  }

  gotoDetail(vacation: Vacation): void {
    let link = ['/detail', vacation.id];
    this.router.navigate(link);
  }
}
