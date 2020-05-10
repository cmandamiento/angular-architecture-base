import { Injectable } from '@angular/core';
import { SharedState } from './state/shared.state';

@Injectable()
export class SharedFacade {
  constructor(
    private sharedState: SharedState
  ) {}

  isLoading() {
    return this.sharedState.getIsLoading();
  }

  setLoading(value: boolean) {
    this.sharedState.setIsLoading(value);
  }

}
