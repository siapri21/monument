import { Injectable } from '@angular/core';
import { MONUMENTS } from './monument/mock-monument-list';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Monument } from './monument/monument.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const monuments = MONUMENTS
    return { monuments }
  }

   // ✅ Cette méthode permet de générer automatiquement un nouvel id
  genId(monuments: Monument[]): number {
    return monuments.length > 0 ? Math.max(...monuments.map(m => m.id)) + 1 : 1;
  }
}