import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerosEjemplosComponent } from './primeros-ejemplos.component';

describe('PrimerosEjemplosComponent', () => {
  let component: PrimerosEjemplosComponent;
  let fixture: ComponentFixture<PrimerosEjemplosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerosEjemplosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerosEjemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
