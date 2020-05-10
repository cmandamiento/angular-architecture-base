import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedState {
  private isLoading: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  getIsLoading() {
    return this.isLoading;
  }

  setIsLoading(value: boolean) {
    this.isLoading.next(value);
  }

}
