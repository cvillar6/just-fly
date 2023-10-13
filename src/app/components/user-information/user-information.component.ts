import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});

  passengerFormGroup: FormGroup[] = [];
  passengerFormControl: string[] = [];

  passengers = [1, 2, 3];

  ngOnInit(): void {
    this.buildUserForm();
    this.getControlsName();
  }

  buildUserForm(): void {
    for (const index of this.passengers) {
      this.userForm?.addControl(`id-${index}`, new FormControl(''));
      this.userForm?.addControl(`name-${index}`, new FormControl(''));
      this.userForm?.addControl(`lastName-${index}`, new FormControl(''));
      this.userForm?.addControl(`mobile-${index}`, new FormControl(''));
      this.userForm?.addControl(`email-${index}`, new FormControl(''));
      this.userForm?.addControl(`age-${index}`, new FormControl(''));
    }
  }

  getControlsName(): void {
    for (const field in this.userForm.value) {
      this.passengerFormControl.push(field);
    }
  }
}
