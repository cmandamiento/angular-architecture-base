import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedFacade } from '@shared/shared.facade';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public show: Subject<boolean>;

  constructor(
    private sharedFacade: SharedFacade
  ) { }

  ngOnInit(): void {
    this.show = this.sharedFacade.isLoading();
  }

}
