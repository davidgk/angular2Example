import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnidarComponentesComponent } from './anidar-componentes.component';

describe('AnidarComponentesComponent', () => {
  let component: AnidarComponentesComponent;
  let fixture: ComponentFixture<AnidarComponentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnidarComponentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnidarComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
