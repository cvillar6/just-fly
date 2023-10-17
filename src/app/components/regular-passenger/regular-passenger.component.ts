import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegularPassenger } from 'src/app/models/regular-passenger.model';

@Component({
  selector: 'app-regular-passenger',
  templateUrl: './regular-passenger.component.html',
  styleUrls: ['./regular-passenger.component.scss'],
})
export class RegularPassengerComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: RegularPassenger[]) {}
}
