import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MonumentService } from '../monument.service';
import { Monument } from '../monument.model';

@Component({
  selector: 'app-add-monument',
  templateUrl: './add-monument.component.html',
})
export class AddMonumentComponent {
  constructor(
    private monumentService: MonumentService,
    private router: Router
  ) {}

  onSubmit(monument: Monument) {
  this.monumentService.addMonument(monument).subscribe(() => {
    this.router.navigate(['/list/monument']);
  });
}

}
