import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {

  flights: Flight[] = JSON.parse(sessionStorage.getItem('flights') || '[]');

  constructor(
    private flightService: FlightService
  ) { }

  ngOnInit(): void { }

  updateFlights($event: Flight): void {    
    this.flights = this.flightService.updateFlights($event, this.flights);
  }

}
