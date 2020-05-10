import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Pagination } from '@shared/models/pagination.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() pagination: Pagination;
  @Input() currentPage: number;
  @Input() basePath: string;
  @Input() pagesToShow: number;

  public pages: number[];

  constructor() { }

  ngOnInit(): void {
    this.generateRoutes();
  }

  ngOnChanges(simmpleChanges: SimpleChanges) {
    if(simmpleChanges.currentPage) {
      this.generateRoutes();
    }
  }

  generateRoutes() {
    const MIDDLE = (+this.pagesToShow) / 2;
    const BASE = Math.max((Math.floor(this.currentPage/(+this.pagesToShow)) * (+this.pagesToShow)), 1);
    const BEGIN = Math.min(this.currentPage <= MIDDLE ? BASE : 1 + this.currentPage - MIDDLE, this.pagination.pages + 1 - (+this.pagesToShow));
    const END = Math.min(BEGIN + (+this.pagesToShow) - 1, this.pagination.pages);
    this.pages = [];
    for(let i = Math.floor(BEGIN); i <= END; i++) {
      this.pages.push(i);
    }
  }

}
