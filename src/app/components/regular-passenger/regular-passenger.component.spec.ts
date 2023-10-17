import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularPassengerComponent } from './regular-passenger.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('RegularPassengerComponent', () => {
  let component: RegularPassengerComponent;
  let fixture: ComponentFixture<RegularPassengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularPassengerComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(RegularPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
