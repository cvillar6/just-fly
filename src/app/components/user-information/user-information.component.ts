import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  passengerList: { formControlName: string, description: string }[] = [];

  passengers: number = parseInt(sessionStorage.getItem('passengers') || '1');

  isLoading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.buildUserForm();
  }

  buildUserForm(): void {
    for (let index = 0; index < this.passengers; index++) {
      this.addFormControl(`id-${index}`, 'Identificación');
      this.addFormControl(`name-${index}`, 'Nombre');
      this.addFormControl(`lastName-${index}`, 'Apellido');
      this.addFormControl(`mobile-${index}`, 'Celular');
      this.addFormControl(`email-${index}`, 'Correo electrónico');
      this.addFormControl(`age-${index}`, 'Edad');
    }
  }

  addFormControl(formControlName: string, description: string): void {
    this.userForm.addControl(formControlName, new FormControl(''));
    this.passengerList.push({ formControlName, description });
  }

  onSubmit(): void {
    // this.isLoading = true;

    console.log(this.userForm.value);

    sessionStorage.setItem('users', JSON.stringify(this.userForm.value));
    

    // setTimeout(() => {
    //   this.router.navigate(['checkout']);
    //   sessionStorage.setItem('users', JSON.stringify(this.userForm.value));
    // }, 3000);
    
  }
}
