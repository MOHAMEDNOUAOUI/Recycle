import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSideProfielComponent } from './top-side-profiel.component';

describe('TopSideProfielComponent', () => {
  let component: TopSideProfielComponent;
  let fixture: ComponentFixture<TopSideProfielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSideProfielComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSideProfielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
