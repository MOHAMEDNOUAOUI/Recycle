import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDemandBarComponent } from './all-demand-bar.component';

describe('AllDemandBarComponent', () => {
  let component: AllDemandBarComponent;
  let fixture: ComponentFixture<AllDemandBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllDemandBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDemandBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
