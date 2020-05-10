import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SharedFacade } from '@shared/shared.facade';

@Injectable()

export class LoaderInterceptor implements HttpInterceptor {
  constructor(public sharedFacade: SharedFacade) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.sharedFacade.setLoading(true);
    return next.handle(req).pipe(
      finalize(() => this.sharedFacade.setLoading(false))
    );
  }
}
