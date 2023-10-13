import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getReturnFlights } from 'src/app/data/return-flights';
import { Flight } from 'src/app/models/flight.model';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {

  flights: Flight[] = JSON.parse(sessionStorage.getItem('flights') || '[]');

  isLoading: boolean = false;

  constructor(
    private flightService: FlightService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  updateFlights($event: Flight): void {
    this.isLoading = true;

    setTimeout(() => {
      if ($event.rt) {
        const returnFlight: Flight = {
          ...$event,
          origin: $event.destination,
          destination: $event.origin,
          departureDate: $event.returnDate ? new Date($event.returnDate) : new Date(),
          returnDate: $event.returnDate ? new Date($event.returnDate) : new Date(),
          departureHour: $event.returnHour,
        };

        this.flights = this.flightService.findFlight(returnFlight, getReturnFlights());
        
        this.isLoading = false;
      } else {
        this.router.navigate(['user']);
      }
    }, 3000);
  }
}
