import { Component, OnInit } from '@angular/core';
import { Monument } from '../monument.model';
import { Router } from '@angular/router';
import { MonumentService } from '../monument.service';

@Component({
  selector: 'app-list-monument',
  templateUrl: './list-monument.component.html',
  styles: []
})
export class ListMonumentComponent implements OnInit {
  monumentList: Monument[] = [];
  monumentSelected: Monument | undefined;
  favoris: number[] = [];

  constructor(private router: Router, private monumentService: MonumentService) {}

  ngOnInit(): void {
    this.favoris = JSON.parse(localStorage.getItem('favoris') || '[]');
    this.monumentService.getAllMonuments().subscribe(monumentList => {
      this.monumentList = monumentList;
    });
  }

  selectMonument(monumentId: string) {
    const searchMonument: Monument | undefined = this.monumentList.find(monument => monument.id == +monumentId);
    if (searchMonument) {
      this.monumentSelected = searchMonument;
    } else {
      console.log(`Le monument n'existe pas`);
    }
  }

  goToMonument(monument: Monument) {
    this.router.navigate(['/monument', monument.id]);
  }

  goToAdd() {
    this.router.navigate(['/add/monument']);
  }
}
