import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticulierLayoutComponent } from './particulier-layout.component';

describe('ParticulierLayoutComponent', () => {
  let component: ParticulierLayoutComponent;
  let fixture: ComponentFixture<ParticulierLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticulierLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticulierLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
