import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycleLayoutComponent } from './recycle-layout.component';

describe('RecycleLayoutComponent', () => {
  let component: RecycleLayoutComponent;
  let fixture: ComponentFixture<RecycleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecycleLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecycleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
