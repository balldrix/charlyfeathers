import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'cfs-order-by-filter',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './order-by-filter.component.html',
  styleUrl: './order-by-filter.component.css'
})
export class OrderByFilterComponent {
  @Output() selectOrderBy = new EventEmitter<SortOrder>();
  options: SortOrder[] = [SortOrder.popularity, SortOrder.priceAscending, SortOrder.priceDescenting];
  selectedOption: SortOrder = SortOrder.popularity;

  onOrderSelected() {
    this.selectOrderBy.emit(this.selectedOption);
  }
}

export enum SortOrder {
  none = "none",
  popularity = "Popularity",
  priceAscending = "Price Ascending",
  priceDescenting = "Price Descending"
}
