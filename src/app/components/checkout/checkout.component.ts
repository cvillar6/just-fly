import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  lastFlight: Flight = JSON.parse(sessionStorage.getItem('flight1') || '{}');
  flight: Flight = sessionStorage.getItem('flight2') ? JSON.parse(sessionStorage.getItem('flight2') || '{}') : undefined;

  passengers: any[] = Object.values(JSON.parse(sessionStorage.getItem('users') || '{}'));

  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  finishCheckout(): void {
    sessionStorage.clear();

    this.router.navigate(['']);
  }
}
