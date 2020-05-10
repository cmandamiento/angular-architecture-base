import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './containers/loader/loader.component';
import { SharedFacade } from './shared.facade';
import { SharedState } from './state/shared.state';
import { LoaderInterceptor } from './interceptors/loader.interceptor';


@NgModule({
  declarations: [HeaderComponent, PaginatorComponent, LoaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PaginatorComponent,
    LoaderComponent,
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        SharedFacade,
        SharedState,
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
      ]
    }
  }
}
