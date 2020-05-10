import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iif, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { CharactersFacade } from '@characters/characters.facade';
import { Character } from '@characters/models/character.model';
import { CHARACTERS_ROUTES } from '@characters/enums/routes'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public characters$: Observable<Character[]>;
  public favoriteCharacters$: Observable<Character[]>;
  public pagination$: Observable<Pagination>;
  public currentPage: number = 1;
  public CONTAINER_ROUTE: string = '/' + CHARACTERS_ROUTES.HOME;

  constructor(
    private catalogFacade: CharactersFacade,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        switchMap((params: any) =>
          iif(() => params.page, of(params.page), of(1))
        )
      ).subscribe((page: number) => this.loadCharacters(+page))

    this.pagination$ = this.catalogFacade.getPagination();
    this.characters$ = this.catalogFacade.getCharacters();
    this.favoriteCharacters$ = this.catalogFacade.getFavoriteCharacters();
  }

  updatePage(page: number) {
    this.router.navigate([this.CONTAINER_ROUTE], { queryParams: { page } });
  }

  loadCharacters(page?: number) {
    this.currentPage = page;
    this.catalogFacade.loadCharacters(page).subscribe();
  }

  addFavoriteCharacter(char: Character) {
    this.catalogFacade.addFavoriteCharacter(char);
  }

  removeFavoriteCharacter(id: number) {
    this.catalogFacade.removeFavoriteCharacter(id);
  }

}
