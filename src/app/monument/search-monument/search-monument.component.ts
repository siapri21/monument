import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';
import { Monument } from '../monument.model';
import { Router } from '@angular/router';
import { MonumentService } from '../monument.service';

@Component({
  selector: 'app-search-monument',
  templateUrl: './search-monumen.component.html',
  styles: [
  ]
})
export class SearchMonumentComponent implements OnInit {
  searchTerms = new Subject<string>()
  monuments$: Observable<Monument[]> = of([])

  constructor(private router: Router, private monumentService: MonumentService) {}

  ngOnInit(): void{
    this.monuments$ = this.searchTerms.pipe( 
      //to... tou.touz.tou...tour..tour
      debounceTime(300),
      //to....tour
      distinctUntilChanged(),
      //to....tour
      switchMap( (term) => this.monumentService.searchMonumentList(term))
    )
  }

  search(term: string) {
    this.searchTerms.next(term)
  }
 
  goToDetail(monument: Monument) {
    const link = ["/monument", monument.id]
    this.router.navigate(link)
  }
}