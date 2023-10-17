import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/models/flight.model';
import { RegularPassenger } from 'src/app/models/regular-passenger.model';
import { UserService } from 'src/app/services/user.service';
import { RegularPassengerComponent } from '../regular-passenger/regular-passenger.component';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  passengerList: { formControlName: string; description: string }[] = [];

  flight: Flight = JSON.parse(sessionStorage.getItem('flight1') || '{}');
  passengers: number = parseInt(sessionStorage.getItem('passengers') || '1');

  passengerLimit: number = 6;

  isLoading: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

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
      if (this.flight.visa) {
        this.addFormControl(`visa-${index}`, 'Fecha de vencimiento VISA');
        this.passengerLimit++;
      }
    }
  }

  addFormControl(formControlName: string, description: string): void {
    this.userForm.addControl(formControlName, new FormControl('', Validators.required));
    this.passengerList.push({ formControlName, description });
  }

  getRegularPassengers(): Observable<RegularPassenger[]> {
    const passengersId: string[] = [];
    for (const field in this.userForm.controls) {
      if (field.startsWith('id-')) {
        const idControl: FormControl = this.userForm.get(field) as FormControl;
        passengersId.push(idControl.value);
      }
    }

    return this.userService.filterRegularPassengers(passengersId);
  }

  onSubmit(): void {
    this.isLoading = true;

    sessionStorage.setItem('passengerLimit', this.passengerLimit.toString());
    sessionStorage.setItem('users', JSON.stringify(this.userForm.value));

    this.getRegularPassengers().subscribe(
      (regularPassengers: RegularPassenger[]) => {
        if (regularPassengers.length > 0) {
          this.openDialog(regularPassengers);
        }

        setTimeout(() => {
          this.router.navigate(['checkout']);
        }, 3000);
      }
    );
  }

  openDialog(data: RegularPassenger[]) {
    this.dialog.open(RegularPassengerComponent, {
      data,
    });
  }
}
