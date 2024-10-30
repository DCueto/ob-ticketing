import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartGroupComponent } from './shopping-cart-group.component';

describe('ShoppingCartGroupComponent', () => {
  let component: ShoppingCartGroupComponent;
  let fixture: ComponentFixture<ShoppingCartGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
