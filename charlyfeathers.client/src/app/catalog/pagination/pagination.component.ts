import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cfs-pagination',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})

export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 20;
  @Output() clickPage = new EventEmitter<number>();

  pages: number[] = [];

  faArrowLeft = faArrowLeftLong;
  faArrowRight = faArrowRightLong;

  constructor() {
  }

  ngOnInit() {
    this.paginate();
  }

  private paginate() {
    const maxPages: number = 5;
    const pageCount = Math.ceil(this.totalItems / this.itemsPerPage);

    if(this.currentPage < 1) {
      this.currentPage = 1;
    } else if (this.currentPage > pageCount) {
      this.currentPage = pageCount;
    }

    this.pages = this.range(1, pageCount);
  }

  range(start: number, end: number) : number[] { 
    return Array.from(Array(end).keys()).map(x => x + start);
  }

  onClick(page: number)
  {
    if(page < 1 || page > this.pages.length)
      return;

    this.clickPage.emit(page);
  }
}
