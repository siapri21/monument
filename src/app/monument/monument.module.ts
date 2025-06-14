import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { CountryByColorPipe } from './country-by-color.pipe';
import { ListMonumentComponent } from './list-monument/list-monument.component';
import { DetailMonumentComponent } from './detail-monument/detail-monument.component';
import { RouterModule, Routes } from '@angular/router';
import { MonumentFormComponent } from './form-monument/monument-form.component';
import { FormsModule } from '@angular/forms';
import { EditMonumentComponent } from './edit-monument/edit-monument.component';
import { SearchMonumentComponent } from './search-monument/search-monument.component';
import { authGuard } from '../auth.guard';
import { AddMonumentComponent } from './add-monument/add-monument.component';
import { FavorisMonumentComponent } from './favoris-monument/favoris-monument.component';

const monumentRoutes: Routes = [
  { path: 'edit/monument/:id', component: EditMonumentComponent, canActivate: [authGuard] },
  { path: 'monument/:id', component: DetailMonumentComponent, canActivate: [authGuard] },
  { path: 'monument-form', component: MonumentFormComponent, canActivate: [authGuard] },
  { path: 'monuments', component: ListMonumentComponent, canActivate: [authGuard] },
]

@NgModule({
  declarations: [
    BorderCardDirective,
    CountryByColorPipe,
    ListMonumentComponent,
    DetailMonumentComponent,
    MonumentFormComponent,
    EditMonumentComponent,
    SearchMonumentComponent,
    AddMonumentComponent,
    FavorisMonumentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(monumentRoutes)

  ]
})
export class MonumentModule { }