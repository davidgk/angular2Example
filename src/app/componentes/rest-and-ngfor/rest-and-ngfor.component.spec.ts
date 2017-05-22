import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestAndNgforComponent } from './rest-and-ngfor.component';

describe('RestAndNgforComponent', () => {
  let component: RestAndNgforComponent;
  let fixture: ComponentFixture<RestAndNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestAndNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestAndNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
