import { Flight } from '../models/flight.model';

export const flightsMock = (): Flight[] => {
  return [
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
    {
      origin: 'Medellín',
      destination: 'Bogotá',
      rt: true,
      departureDate: new Date('2023-10-12T05:00:00.000Z'),
      returnDate: new Date('2023-10-20T05:00:00.000Z'),
      departureHour: new Date('2023-10-12T17:00:00.000Z'),
      returnHour: new Date('2023-10-20T15:00:00.000Z'),
      duration: '1:00 h',
      arrivalHour: new Date('2023-10-12T18:00:00.000Z'),
      direct: true,
      price: 100000,
    },
    {
      origin: 'Medellín',
      destination: 'Bogotá',
      rt: true,
      departureDate: new Date('2023-10-12T05:00:00.000Z'),
      returnDate: new Date('2023-10-20T05:00:00.000Z'),
      departureHour: new Date('2023-10-12T19:00:00.000Z'),
      returnHour: new Date('2023-10-20T15:00:00.000Z'),
      duration: '1:00 h',
      arrivalHour: new Date('2023-10-12T20:00:00.000Z'),
      direct: false,
      price: 100000,
    },
    {
      origin: 'Medellín',
      destination: 'Bogotá',
      rt: true,
      departureDate: new Date('2023-10-12T05:00:00.000Z'),
      returnDate: new Date('2023-10-20T05:00:00.000Z'),
      departureHour: new Date('2023-10-13T01:00:00.000Z'),
      returnHour: new Date('2023-10-20T15:00:00.000Z'),
      duration: '1:00 h',
      arrivalHour: new Date('2023-10-13T02:00:00.000Z'),
      direct: true,
      price: 100000,
    },
    {
      origin: 'Medellín',
      destination: 'Bogotá',
      rt: true,
      departureDate: new Date('2023-10-12T05:00:00.000Z'),
      returnDate: new Date('2023-10-20T05:00:00.000Z'),
      departureHour: new Date('2023-10-13T03:00:00.000Z'),
      returnHour: new Date('2023-10-20T15:00:00.000Z'),
      duration: '1:00 h',
      arrivalHour: new Date('2023-10-13T04:00:00.000Z'),
      direct: true,
      price: 100000,
    },
    {
      origin: 'Bogotá',
      destination: 'Medellín',
      rt: true,
      departureDate: new Date('2023-10-12T05:00:00.000Z'),
      returnDate: new Date('2023-10-20T05:00:00.000Z'),
      departureHour: new Date('2023-10-12T15:00:00.000Z'),
      returnHour: new Date('2023-10-20T15:00:00.000Z'),
      duration: '1:00 h',
      arrivalHour: new Date('2023-10-12T16:00:00.000Z'),
      direct: false,
      price: 100000,
    },
  ];
};