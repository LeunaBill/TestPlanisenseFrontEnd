import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbresParArrondissementComponent } from './arbres-par-arrondissement.component';

describe('ArbresParArrondissementComponent', () => {
  let component: ArbresParArrondissementComponent;
  let fixture: ComponentFixture<ArbresParArrondissementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArbresParArrondissementComponent]
    });
    fixture = TestBed.createComponent(ArbresParArrondissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
