import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AddMonumentComponent } from './monument/add-monument/add-monument.component';
import { FavorisMonumentComponent } from './monument/favoris-monument/favoris-monument.component';
import { StatsMonumentComponent } from './monument/stats-monument/stats-monument.component';

const routes: Routes = [
   { path: 'login', component: LoginComponent},
   {path: 'add/monument',  component: AddMonumentComponent},
   {path: 'favoris', component: FavorisMonumentComponent},
   {path: 'stats' , component: StatsMonumentComponent},
  { path: '', redirectTo: 'monuments', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }