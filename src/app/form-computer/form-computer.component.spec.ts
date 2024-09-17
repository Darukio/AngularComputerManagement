import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComputerComponent } from './form-computer.component';

describe('FormComputerComponent', () => {
  let component: FormComputerComponent;
  let fixture: ComponentFixture<FormComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComputerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
