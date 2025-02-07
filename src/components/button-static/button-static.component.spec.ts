import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStaticComponent } from './button-static.component';

describe('ButtonStaticComponent', () => {
  let component: ButtonStaticComponent;
  let fixture: ComponentFixture<ButtonStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonStaticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
