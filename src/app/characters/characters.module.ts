import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { CatalogComponent } from './containers/catalog/catalog.component';
import { CharactersFacade } from './characters.facade';
import { CharacterComponent } from './components/character/character.component';
import { CharactersState } from './state/characters.state';
import { FavoriteCharactersComponent } from './components/favorite-characters/favorite-characters.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    CatalogComponent,
    CharacterComponent,
    FavoriteCharactersComponent
  ],
  providers: [
    CharactersFacade,
    CharactersState
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
