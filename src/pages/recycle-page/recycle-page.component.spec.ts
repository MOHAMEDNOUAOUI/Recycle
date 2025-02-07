import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclePageComponent } from './recycle-page.component';

describe('RecyclePageComponent', () => {
  let component: RecyclePageComponent;
  let fixture: ComponentFixture<RecyclePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecyclePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecyclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
