import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormDataComponent } from './reactive-form-data.component';

describe('ReactiveFormDataComponent', () => {
  let component: ReactiveFormDataComponent;
  let fixture: ComponentFixture<ReactiveFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
