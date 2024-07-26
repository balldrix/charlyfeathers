import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cfs-pagination',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})

export class PaginationComponent {
  @Input() itemsPerPage: BehaviorSubject<number> = new BehaviorSubject(10);
  @Input() currentPage: number = 1;
  @Input() totalItems: number = 0;
  @Output() clickPage = new EventEmitter<number>();

  readonly maxPages: number = 6;
  pages: number[] = [];
  pageCount: number = 1;

  faArrowLeft = faArrowLeftLong;
  faArrowRight = faArrowRightLong;

  constructor() {
  }

  ngOnInit() {
    this.itemsPerPage.subscribe( {
      next: () => { this.paginate(this.currentPage); }
    })
    this.paginate(this.currentPage);
  }

  public paginate(currentPage: number) {
    this.pageCount = Math.ceil(this.totalItems / this.itemsPerPage.value);
    
    let start: number = 2;
    let end: number = this.pageCount - 1;

    if(currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > this.pageCount) {
      currentPage = this.pageCount;
    }
    
    let maxPagesBeforeCurrentPage = Math.floor(this.maxPages / 2);
    let maxPagesAfterCurrentPage = Math.ceil(this.maxPages / 2);

    if (this.pageCount == 1) {
      this.pages = [];
      return;
    } else if (this.pageCount <= this.maxPages) {
        start = 2;
        end = this.pageCount - 1;
    } else if (currentPage <= maxPagesBeforeCurrentPage) {
        start = 2;
        end = this.maxPages - 1;
    } else if (currentPage + maxPagesAfterCurrentPage >= this.pageCount) {
        start = this.pageCount - this.maxPages + 1;
        end = this.pageCount - 1;
    } else {
        start = currentPage - maxPagesBeforeCurrentPage + 1;
        end = currentPage + maxPagesAfterCurrentPage - 1;
    }
    
    console.log("start:" + start);
    console.log("end:" + end);
    this.pages = this.range(start, end);
    console.log(this.pages);
  }

  range(start: number, end: number) : number[] { 
    return Array.from(Array((end + 1) - start).keys()).map(x => x + start);
  }

  onClick(page: number)
  {
    if(page < 1 || page > this.pageCount)
      return;

    this.clickPage.emit(page);
    this.paginate(page);
  }
}
