import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbresParGenreComponent } from './arbres-par-genre.component';

describe('ArbresParGenreComponent', () => {
  let component: ArbresParGenreComponent;
  let fixture: ComponentFixture<ArbresParGenreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArbresParGenreComponent]
    });
    fixture = TestBed.createComponent(ArbresParGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
