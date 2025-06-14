import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Monument } from '../monument.model';
import { MonumentService } from '../monument.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monument-form',
  templateUrl: './monument-form.component.html',
})
export class MonumentFormComponent implements OnInit {
  @Input() monument: Monument = {} as Monument;
  @Output() formSubmit = new EventEmitter<Monument>();

  countries: string[] = [];
  isAddForm: boolean = false;

  constructor(
    private monumentService: MonumentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countries = this.monumentService.getAllCountry();
    this.isAddForm = this.router.url.includes('add');
  }

  onSubmit() {
    if (this.isAddForm) {
      // Cas d'ajout : on passe la donnée au composant parent
      this.formSubmit.emit(this.monument);
    } else if (this.monument) {
      // Cas de modification : on envoie la requête ici
      this.monumentService.editMonument(this.monument).subscribe(() =>
        this.router.navigate(['/monument', this.monument?.id])
      );
    }
  }
}
