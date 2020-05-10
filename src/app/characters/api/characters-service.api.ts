import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalog } from '@characters/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  readonly API = `https://rickandmortyapi.com/api`;

  constructor(
    private http: HttpClient
  ) {}

  getAll(page: number): Observable<Catalog> {
    return this.http.get<Catalog>(`${this.API}/character?page=${page}`)
  }
}
