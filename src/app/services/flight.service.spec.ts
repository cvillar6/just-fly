import { TestBed } from '@angular/core/testing';

import { FlightService } from './flight.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { flightsMock } from '../mocks/flights.mock';
import { Flight } from '../models/flight.model';

describe('FlightService', () => {
  let service: FlightService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(FlightService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute getFlights and returns flights', () => {
    service.getFlights().subscribe((flightData) => {
      expect(flightData.flightData.length === flightsMock.length);
    });

    expect(service).toBeTruthy();
  });

  it('should execute getReturnFlights and returns flights', () => {
    service.getReturnFlights().subscribe((flightData) => {
      expect(flightData.flightData.length === flightsMock.length);
    });

    expect(service).toBeTruthy();
  });

  it('should execute findFlight and find one flight', () => {
    const flightResult: Flight[] = service.findFlight(
      flightsMock()[0],
      flightsMock()
    );

    expect(flightResult.length).toBe(1);
    expect(flightResult).toEqual([
      {
        origin: 'Medellín',
        destination: 'Bogotá',
        rt: false,
        departureDate: new Date('2023-10-12T05:00:00.000Z'),
        departureHour: new Date('2023-10-12T15:00:00.000Z'),
        duration: '1:00 h',
        arrivalHour: new Date('2023-10-12T16:00:00.000Z'),
        direct: true,
        price: 100000,
      },
    ]);
  });

  it('should execute findFlight and find zero flight', () => {
    const fligth: Flight = flightsMock()[0];
    fligth.origin = 'Armenia';

    const flightResult: Flight[] = service.findFlight(fligth, flightsMock());

    expect(flightResult.length).toBe(0);
    expect(flightResult).toEqual([]);
  });

  it('should execute findFlight and find four flights', () => {
    const flightResult: Flight[] = service.findFlight(
      flightsMock()[1],
      flightsMock()
    );

    expect(flightResult.length).toBe(4);
    expect(flightResult).toEqual([
      flightsMock()[1],
      flightsMock()[2],
      flightsMock()[3],
      flightsMock()[4],
    ]);
  });
});
