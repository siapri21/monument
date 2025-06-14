
import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false 
  redirectUrl: string = ''

  constructor() { }

  login(identifiant: string, mdp: string): Observable<boolean> {
    const isLoggedIn = (identifiant== "admin" && mdp == "1234")

    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    )
  }

  logout() {
    this.isLoggedIn = false;
  }
 
}
