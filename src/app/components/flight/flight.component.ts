import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/flight.model';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent {
  @Input() flight?: Flight;
  @Output() showReturnFlights: EventEmitter<Flight> = new EventEmitter<Flight>();

  constructor(
    private flightService: FlightService,
    private router: Router
  ) { }

  checkFlight(selectedFlight?: Flight): void {
    if (selectedFlight) {
      selectedFlight.rt ?
        this.showReturnFlights.emit(selectedFlight) :
        this.router.navigate(['home']);
    }
  }
}