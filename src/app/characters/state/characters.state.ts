import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Character } from '@characters/models/character.model';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Injectable()
export class CharactersState {
  private favorites: BehaviorSubject<Character[]> = new BehaviorSubject([]);
  private characters: BehaviorSubject<Character[]> = new BehaviorSubject([]);
  private pagination: Subject<Pagination> = new Subject();

  constructor() {}

  setPagination(pagination: Pagination) {
    this.pagination.next(pagination);
  }

  getPagination() {
    return this.pagination.asObservable();
  }

  setCharacters(characters: Character[]) {
    this.characters.next(characters);
  }

  getCharacters() {
    return this.characters.asObservable();
  }

  addFavorite(character: Character) {
    const currentValue = this.favorites.getValue();
    this.favorites.next([...currentValue, character]);
  }

  removeFavorite(id: number) {
    const currentValue = this.favorites.getValue();
    this.favorites.next(currentValue.filter(char => char.id !== id));
  }

  getFavorites() {
    return this.favorites.asObservable();
  }

}
