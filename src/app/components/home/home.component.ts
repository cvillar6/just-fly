import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription, map, startWith } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  formChanges$: Subscription | undefined;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  flightForm: FormGroup = new FormGroup({
    rt: new FormControl(true),
    origin: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    startDate: new FormControl({ value: '', disabled: true }, Validators.required),
    startDateRange: new FormControl('', Validators.required),
    endDateRange: new FormControl('', Validators.required),
    passengers: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.rtChanged();
    this.originChanged();
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
          this.getControl('startDate').disable();
          this.getControl('destination').enable();
          this.getControl('startDateRange').enable();
          this.getControl('endDateRange').enable();
        } else {
          this.getControl('startDate').enable();
          this.getControl('destination').disable();
          this.getControl('startDateRange').disable();
          this.getControl('endDateRange').disable();
        }
      });
  }

  originChanged(): void {
    this.filteredOptions = this.getControl('origin').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  onSubmit(): void {
    console.log(this.flightForm);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}