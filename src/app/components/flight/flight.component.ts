import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent {
  @Input() flight?: Flight;
  @Input() showButton: boolean = true;
  @Output() showReturnFlights: EventEmitter<Flight> = new EventEmitter<Flight>();

  constructor() { }

  checkFlight(selectedFlight?: Flight): void {
    if (selectedFlight) {
      this.showReturnFlights.emit(selectedFlight);
    }
  }
}