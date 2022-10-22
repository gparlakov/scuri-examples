import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Lib {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class LibsApiService {

  constructor() { }

  getAll(): Observable<Lib[]> {
    return of([{name: 'SCuri'}])
  }
}
