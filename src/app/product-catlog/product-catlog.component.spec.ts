import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatlogComponent } from './product-catlog.component';

describe('ProductCatlogComponent', () => {
  let component: ProductCatlogComponent;
  let fixture: ComponentFixture<ProductCatlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCatlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCatlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
