import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationComponent } from './user-information.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UserInformationComponent', () => {
  let component: UserInformationComponent;
  let fixture: ComponentFixture<UserInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [UserInformationComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(UserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get default passengers from sessionStorage', () => {
    const passengersResult: number = component.passengers;

    expect(passengersResult).toBe(1);
  });

  it('should add one control using addFormControl', () => {
    component.addFormControl('newForm', 'newFormDescription');

    expect(component.userForm.get('newFormControl')).toBeDefined();
    expect(component.passengerList.length).toBe(7);
  });
});
