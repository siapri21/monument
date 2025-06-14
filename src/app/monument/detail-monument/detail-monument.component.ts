import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MONUMENTS } from '../mock-monument-list';
import { Monument } from '../monument.model';
import { MonumentService } from '../monument.service';

@Component({
  selector: 'app-detail-monument',
  templateUrl: './detail-monument.component.html',
  styles: [
  ]
})
export class DetailMonumentComponent implements OnInit {
  monumentList: Monument[] = MONUMENTS
  monument: Monument|undefined

  constructor(private route: ActivatedRoute, private router: Router,private monumentService: MonumentService) {}

  ngOnInit(): void {

    const monumentId: string|null = this.route.snapshot.paramMap.get('id')
    if(monumentId){
      this.monumentService.getMonumentById(+monumentId).subscribe( monument => this.monument = monument)
    }

    console.log(monumentId);
  }

  goToMonumentList(){
    this.router.navigate(['/monuments']);
  }

  goToMonumentEdit(){
    this.router.navigate(['edit/monument', this.monument?.id]);
  }

ajouterAuxFavoris() {
  if (!this.monument) {
    alert('Le monument n’est pas encore chargé.');
    return;
  }

  const favoris: number[] = JSON.parse(localStorage.getItem('favoris') || '[]');

  if (!favoris.includes(this.monument.id)) {
    favoris.push(this.monument.id);
    localStorage.setItem('favoris', JSON.stringify(favoris));
    alert('Ajouté aux favoris !');
  } else {
    alert('Déjà dans les favoris.');
  }
}


}