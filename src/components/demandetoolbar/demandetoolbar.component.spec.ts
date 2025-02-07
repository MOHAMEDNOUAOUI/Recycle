import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandetoolbarComponent } from './demandetoolbar.component';

describe('DemandetoolbarComponent', () => {
  let component: DemandetoolbarComponent;
  let fixture: ComponentFixture<DemandetoolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandetoolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandetoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
