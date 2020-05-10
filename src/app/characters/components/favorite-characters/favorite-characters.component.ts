import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '@characters/models/character.model';

enum Status {
  ALIVE = 'Alive',
  UNKNOWN = 'unknown',
  DEAD = 'Dead'
}

@Component({
  selector: 'app-favorite-characters',
  templateUrl: './favorite-characters.component.html',
  styleUrls: ['./favorite-characters.component.scss']
})
export class FavoriteCharactersComponent implements OnInit {
  @Input() favoriteCharacters: Character[];
  @Output() removeFavorite: EventEmitter<number> = new EventEmitter();
  public STATUS = Status;

  constructor(
  ) {}

  ngOnInit(): void {
  }

  remove(id: number) {
    this.removeFavorite.emit(id);
  }

}
