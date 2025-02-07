import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDemandBarItemComponent } from './all-demand-bar-item.component';

describe('AllDemandBarItemComponent', () => {
  let component: AllDemandBarItemComponent;
  let fixture: ComponentFixture<AllDemandBarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllDemandBarItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDemandBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
