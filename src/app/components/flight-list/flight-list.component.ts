import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { Flight } from 'src/app/models/flight.model';
import { FlightService } from 'src/app/services/flight.service';
import { globalPaths } from 'src/app/utils/global-paths';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
})
export class FlightListComponent implements OnDestroy {
  flights: Flight[] = JSON.parse(sessionStorage.getItem('flights') || '[]');

  flightData$: Subscription | undefined;

  sadAirplaneImage: string = globalPaths.s3Bucket.concat('sad_airplane.webp');

  isLoading: boolean = false;

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnDestroy(): void {
    this.flightData$?.unsubscribe();
  }

  updateFlights($event: Flight): void {
    this.isLoading = true;

    if ($event.rt) {
      const returnFlight: Flight = {
        ...$event,
        origin: $event.destination,
        destination: $event.origin,
        departureDate: $event.returnDate
          ? new Date($event.returnDate)
          : new Date(),
        returnDate: $event.returnDate
          ? new Date($event.returnDate)
          : new Date(),
        departureHour: $event.returnHour,
      };

      sessionStorage.setItem('flight2', JSON.stringify($event));

      this.flightData$ = this.flightService
        .getReturnFlights()
        .pipe(
          map((flightData: { flightData: Flight[] }) =>
            flightData.flightData.map((flight: Flight) => {
              return {
                ...flight,
                departureDate: new Date(flight.departureDate),
                returnDate: flight.returnDate
                  ? new Date(flight.returnDate)
                  : undefined,
              };
            })
          )
        )
        .subscribe((flightData: Flight[]) => {
          this.flights = this.flightService.findFlight(
            returnFlight,
            flightData
          );
          this.isLoading = false;
        });
    } else {
      sessionStorage.setItem('flight1', JSON.stringify($event));

      setTimeout(() => {
        this.router.navigate(['user']);
      }, 3000);
    }
  }
}
