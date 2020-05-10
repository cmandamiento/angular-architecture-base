import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CHARACTERS_ROUTES } from '@characters/enums/routes';

CHARACTERS_ROUTES
const routes: Routes = [
  {
    path: '',
    redirectTo: `${CHARACTERS_ROUTES.HOME}?page=1`,
    pathMatch: 'full'
  },
  {
    path: `${CHARACTERS_ROUTES.HOME}`,
    loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
