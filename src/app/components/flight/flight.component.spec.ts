import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightComponent } from './flight.component';
import { flightsMock } from 'src/app/mocks/flights.mock';

describe('FlightComponent', () => {
  let component: FlightComponent;
  let fixture: ComponentFixture<FlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightComponent],
    });
    fixture = TestBed.createComponent(FlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should showButton to be true', () => {
    expect(component.showButton).toBeTruthy();
  });
});
