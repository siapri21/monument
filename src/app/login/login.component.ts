import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit{
  message= 'Vous êtes deconnecté. (admin / 1234)'
  identifiant = ''
  password = ''

  constructor(
    public auth: AuthService,
    public router: Router
  ) {}

  ngOnInit() {}

  setMessage(): void {
    this.message = this.auth.isLoggedIn ? 'Vous êtes connecté' : 'Vous êtes déconnecté'
  }

  login(): void {
    this.message = 'En cours de connexion...';

    this.auth.login(this.identifiant, this.password).subscribe((isLoggedIn:boolean) => {
      this.setMessage()

      if(isLoggedIn){
        this.router.navigate(['/monuments'])
      }else{
        this.password = '';
        this.router.navigate(['/login'])
      }
    })
  }

  logout(): void {
    this.auth.logout();
    this.setMessage()
  }

}