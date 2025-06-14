import { Injectable } from '@angular/core';
import { Monument } from './monument.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonumentService {
  private apiUrl = 'api'; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  getAllMonuments(): Observable<Monument[]> {
    
    return this.http.get<Monument[]>('api/monuments').pipe(

      tap((response : Monument[] ) => console.log(response)),

      catchError ( (error) => {
        console.log(error)
        return of([])
      })

    )
  }

  getMonumentById(monumentId: number): Observable<Monument|undefined> {
    return this.http.get<Monument>(`api/monuments/${monumentId}`).pipe(

      tap((response : Monument ) => console.log(response)),
      
      catchError ( (error) => {
        console.log(error)
        return of(undefined)
      })

    )
  }

  editMonument(monument: Monument): Observable<null> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type' : 'application/json'  })
    };

    return this.http.put<null>('api/monuments', monument, httpOptions).pipe(
      tap((response) => console.log(response)),
      catchError ( (error) => {
        console.log(error)
        return of(null)
      })
    )

  }

  searchMonumentList(term: string): Observable<Monument[]> {
    return this.http.get<Monument[]>(`api/monuments?name=${term}`).pipe(
      tap((response : Monument[] ) => console.log(response)),
      catchError ( (error) => {
        console.log(error)
        return of([])
      })
    )
  }

  addMonument(monument: Monument): Observable<Monument> {
  return this.http.post<Monument>(`${this.apiUrl}/monuments`, monument);
}


  getAllCountry() {
    return [
      'France',
      'États-Unis',
      'Italie',
      'Royaume-Uni',
      'Inde',
      'Brésil',
      'Égypte',
      'Pérou',
      'Grèce'
    ]
  }
}