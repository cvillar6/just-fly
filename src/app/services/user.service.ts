import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegularPassenger } from '../models/regular-passenger.model';
import { globalPaths } from '../utils/global-paths';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  filterRegularPassengers(
    passengersIds: string[]
  ): Observable<RegularPassenger[]> {
    let regularPassengers: RegularPassenger[] = [];

    return this.getRegularPassengers().pipe(
      map(
        (regularPassengersList: { regularPassengers: RegularPassenger[] }) => {
          regularPassengers = regularPassengersList.regularPassengers;
          return regularPassengers.filter(
            (regularPassenger: RegularPassenger) =>
              passengersIds.includes(regularPassenger.id)
          );
        }
      )
    );
  }

  getRegularPassengers(): Observable<{
    regularPassengers: RegularPassenger[];
  }> {
    return this.httpClient.get(globalPaths.regularPassengers) as Observable<{
      regularPassengers: RegularPassenger[];
    }>;
  }
}
