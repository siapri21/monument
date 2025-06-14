import { Component, OnInit } from '@angular/core';
import { MonumentService } from '../monument.service';
import { Monument } from '../monument.model';

@Component({
  selector: 'app-favoris-monument',
  templateUrl: './favoris-monument.component.html'
})
export class FavorisMonumentComponent implements OnInit {
  monuments: Monument[] = [];

  constructor(private monumentService: MonumentService) {}

  ngOnInit(): void {
    const favorisIds: number[] = JSON.parse(localStorage.getItem('favoris') || '[]');

    this.monumentService.getAllMonuments().subscribe((data: Monument[]) => {
      this.monuments = data.filter((m: Monument) => favorisIds.includes(m.id));
    });
  }
}
