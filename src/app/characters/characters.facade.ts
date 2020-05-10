import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { CharactersApiService } from './api/characters-service.api';
import { Catalog, Character } from './models/character.model';
import { CharactersState } from './state/characters.state';

@Injectable()
export class CharactersFacade {

  constructor(
    private charactersApi: CharactersApiService,
    private charactersState: CharactersState,
  ) { }

  loadCharacters(page: number = 1) {
    return this.charactersApi.getAll(page)
      .pipe(
        tap((data: Catalog) => {
          this.charactersState.setPagination({pages: data.info.pages, count: data.info.count});
          this.charactersState.setCharacters(data.results);
        })
      );
  }

  getPagination() {
    return this.charactersState.getPagination()
      .pipe(distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)))
  }

  addFavoriteCharacter(character: Character) {
    this.charactersState.addFavorite(character);
  }

  removeFavoriteCharacter(id: number) {
    this.charactersState.removeFavorite(id);
  }

  getFavoriteCharacters() {
    return this.charactersState.getFavorites();
  }

  getCharacters() {
    return this.getFavoriteCharacters().pipe(
      switchMap(favorites => this.charactersState.getCharacters().pipe(
        map(result => result.map(char =>({
            ...char,
            selected: favorites.some(fav => fav.id === char.id)
        })))
      ))
    )

  }
}
