import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cfs-num-products-filter',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './num-products-filter.component.html',
  styleUrl: './num-products-filter.component.css'
})
export class NumProductsFilterComponent {
  @Output() selectMaxProducts = new EventEmitter<number>();
  maxProducts: number = 10;
  options = [
     { key: 'Show 10 Items', value: 10 },
     { key: 'Show 20 Items', value: 20 },
     { key: 'Show 25 Items', value: 25 },
     { key: 'Show 50 Items', value: 50 },
     { key: 'Show 100 Items', value: 100 }
    ];

  onNumberSelected() {
    this.selectMaxProducts.emit(this.maxProducts);
  }
}
