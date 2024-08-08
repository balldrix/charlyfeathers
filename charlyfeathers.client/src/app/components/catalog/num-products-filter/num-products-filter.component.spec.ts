import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumProductsFilterComponent } from './num-products-filter.component';

describe('NumProductsFilterComponent', () => {
  let component: NumProductsFilterComponent;
  let fixture: ComponentFixture<NumProductsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumProductsFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumProductsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
