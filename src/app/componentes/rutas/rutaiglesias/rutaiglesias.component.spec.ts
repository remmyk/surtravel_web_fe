import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaiglesiasComponent } from './rutaiglesias.component';

describe('RutaiglesiasComponent', () => {
  let component: RutaiglesiasComponent;
  let fixture: ComponentFixture<RutaiglesiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutaiglesiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutaiglesiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
