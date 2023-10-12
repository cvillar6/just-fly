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

  updateFlights(flight: Flight, selectedFlights: Flight[]): Flight[] {
    const updatedFlights: Flight[] = [];

    selectedFlights.map((flightItem: Flight) => {
      flightItem.rt = !flightItem.rt
      flightItem.origin = flight.destination;
      flightItem.destination = flight.origin;
      flightItem.departureDate = flight.returnDate || new Date();
      flightItem.departureHour = flight.returnHour;

      updatedFlights.push(flightItem);
    });

    return updatedFlights;
  }
}
