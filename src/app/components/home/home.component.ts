import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, map, startWith } from 'rxjs';
import { getCities } from 'src/app/data/cities';
import { City } from 'src/app/models/city.model';
import { Flight } from 'src/app/models/flight.model';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  formChanges$: Subscription | undefined;
  cities: string[] = getCities().map((city: City) => city.name);
  filteredOptions: Observable<string[]> | undefined;

  flightForm: FormGroup = new FormGroup({
    rt: new FormControl(true),
    origin: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    departureDate: new FormControl({ value: '', disabled: true }, Validators.required),
    departureDateRange: new FormControl('', Validators.required),
    returnDateRange: new FormControl('', Validators.required),
    adultPassegers: new FormControl('', Validators.required),
    childPassegers: new FormControl(''),
    babyPassengers: new FormControl(''),
  });

  constructor(
    private router: Router,
    private flightService: FlightService
  ) { }

  ngOnInit(): void {
    this.rtChanged();
    this.cityChanged('origin');
    this.cityChanged('destination');
  }

  ngOnDestroy(): void {
    this.formChanges$?.unsubscribe();
  }

  getControl(formControlName: string): FormControl {
    return this.flightForm.get(formControlName) as FormControl;
  }

  rtChanged(): void {
    this.formChanges$ = this.getControl('rt').valueChanges.subscribe(
      (rtValue: boolean) => {
        if (rtValue) {
          this.getControl('departureDate').disable();
          this.getControl('departureDateRange').enable();
          this.getControl('returnDateRange').enable();
        } else {
          this.getControl('departureDate').enable();
          this.getControl('departureDateRange').disable();
          this.getControl('returnDateRange').disable();
        }
      });
  }

  cityChanged(controlCityName: string): void {
    this.filteredOptions = this.getControl(controlCityName).valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  onSubmit(): void {
    const flight: Flight = {
      origin: this.flightForm.value.origin,
      destination: this.flightForm.value.destination,
      rt: this.flightForm.value.rt,
      departureDate: this.flightForm.value.departureDate || this.flightForm.value.departureDateRange,
      returnDate: this.flightForm.value.returnDateRange
    }

    sessionStorage.setItem('flights', JSON.stringify(this.flightService.findFlight(flight)));

    this.router.navigate(['flights']);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(option => option.toLowerCase().includes(filterValue));
  }
}