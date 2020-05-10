import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '@characters/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;
  @Output() selectFavorite: EventEmitter<Character> = new EventEmitter();
  @Output() unselectFavorite: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectCharacter() {
    this.selectFavorite.emit(this.character);
  }

  unselectCharacter() {
    this.unselectFavorite.emit(this.character.id);
  }

}
