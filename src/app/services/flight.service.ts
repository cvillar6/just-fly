import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.model';
import { getFlights } from '../data/flights';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private _flights: Flight[] = getFlights();

  constructor() { }

  findFlight(flight: Flight): Flight[] {
    return this._flights.filter((flightItem: Flight) =>
      flight.rt === flightItem.rt &&
      flight.origin === flightItem.origin &&
      flight.destination === flightItem.destination &&
      flight.departureDate.getTime() === flightItem.departureDate.getTime() &&
      flight.returnDate?.getTime() === flightItem.returnDate?.getTime()
    )
  }
}
