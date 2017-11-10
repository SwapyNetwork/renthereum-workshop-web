import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedComponent } from './rented.component';

describe('RentedComponent', () => {
  let component: RentedComponent;
  let fixture: ComponentFixture<RentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
