import { Component, OnInit } from '@angular/core';
import { MonumentService } from '../monument.service';
import { Monument } from '../monument.model';

@Component({
  selector: 'app-stats-monument',
  templateUrl: './stats-monument.component.html',
})
export class StatsMonumentComponent implements OnInit {
  monuments: Monument[] = [];
  total: number = 0;
  monumentsParPays: { [key: string]: number } = {};

  constructor(private monumentService: MonumentService) {}

 ngOnInit(): void {
  this.monumentService.getAllMonuments().subscribe((data: Monument[]) => {
    this.monuments = data;
    this.total = data.length;
    this.monumentsParPays = this.getMonumentsParPays(data);
  });
}


  getMonumentsParPays(monuments: Monument[]): { [key: string]: number } {
    const stats: { [key: string]: number } = {};
    for (let m of monuments) {
      stats[m.country] = (stats[m.country] || 0) + 1;
    }
    return stats;
  }
}
