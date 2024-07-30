import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'cfs-category-filter',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css'
})
export class CategoryFilterComponent {
  @Input() startingOption!: string;
  @Output() selectCategory = new EventEmitter<Category>();
  options: Category[] = [Category.all, Category.flossdrops, Category.needleMinders, Category.ringBling];
  selectedOption: Category = Category.all;

  ngOnInit() {
    this.selectedOption = <Category>this.startingOption;
  }

  onCategorySelected() {
    this.selectCategory.emit(this.selectedOption);
  }
}

export enum Category {
  all = "All",
  flossdrops = "Floss Drops",
  needleMinders = "Needle Minders",
  ringBling = "Ring Bling"
}