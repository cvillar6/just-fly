import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {

  flights: Flight[] = JSON.parse(sessionStorage.getItem('flights') || '[]');

  ngOnInit(): void {
    console.log(this.flights);
  }

}
