import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcategoriaComponent } from './itemcategoria.component';

describe('ItemcategoriaComponent', () => {
  let component: ItemcategoriaComponent;
  let fixture: ComponentFixture<ItemcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemcategoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
