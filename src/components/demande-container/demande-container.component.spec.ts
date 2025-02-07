import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeContainerComponent } from './demande-container.component';

describe('DemandeContainerComponent', () => {
  let component: DemandeContainerComponent;
  let fixture: ComponentFixture<DemandeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
