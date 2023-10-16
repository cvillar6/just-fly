import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardComponent } from './credit-card.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

describe('CreditCardComponent', () => {
  let component: CreditCardComponent;
  let fixture: ComponentFixture<CreditCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCardComponent],
      imports: [MatDatepickerModule, MatNativeDateModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(CreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cvv input', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.cvv input')?.getAttribute('placeholder')).toContain(
      'CVV'
    );
    expect(component).toBeTruthy();
  });
});
