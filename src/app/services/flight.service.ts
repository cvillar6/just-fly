import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor() { }

  findFlight(flight: Flight, flightList: Flight[]): Flight[] {
    return flightList.filter((flightItem: Flight) =>
      flight.origin === flightItem.origin &&
      flight.destination === flightItem.destination &&
      flight.departureDate.getTime() === flightItem.departureDate.getTime() &&
      flight.returnDate?.getTime() === flightItem.returnDate?.getTime()
    );
  }
}
