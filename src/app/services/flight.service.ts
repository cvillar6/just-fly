import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';
import { globalPaths } from '../utils/global-paths';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private httpClient: HttpClient) { }

  getFlights(): Observable<{ flightData: Flight[] }> {
    return this.httpClient.get(globalPaths.flights) as Observable<{ flightData: Flight[] }>;
  }

  getReturnFlights(): Observable<{ flightData: Flight[] }> {
    return this.httpClient.get(globalPaths.returnFlights) as Observable<{ flightData: Flight[] }>;
  }

  findFlight(flight: Flight, flightList: Flight[]): Flight[] {
    return flightList.filter((flightItem: Flight) =>
      flight.origin === flightItem.origin &&
      flight.destination === flightItem.destination &&
      flight.departureDate.getTime() === flightItem.departureDate.getTime() &&
      flight.returnDate?.getTime() === flightItem.returnDate?.getTime()
    );
  }
}
