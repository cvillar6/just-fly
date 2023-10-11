import { Flight } from "../models/flight.model"

export const getFlights = (): Flight[] => {
    return [
        {
            origin: 'Medellín',
            destination: 'Bogotá',
            rt: false,
            departureDate: new Date(2023, 9, 12),
            departureHour: new Date(2023, 9, 12, 10),
            duration: 1,
            arrivalHour: new Date(2023, 9, 12, 11),
            direct: true,
            price: 100000
        },
        {
            origin: 'Medellín',
            destination: 'Bogotá',
            rt: true,
            departureDate: new Date(2023, 9, 12),
            returnDate: new Date(2023, 9, 20),
            departureHour: new Date(2023, 9, 12, 12),
            returnHour: new Date(2023, 9, 20, 10),
            duration: 1,
            arrivalHour: new Date(2023, 9, 12, 13),
            direct: true,
            price: 100000
        },
        {
            origin: 'Medellín',
            destination: 'Bogotá',
            rt: true,
            departureDate: new Date(2023, 9, 12),
            returnDate: new Date(2023, 9, 20),
            departureHour: new Date(2023, 9, 12, 14),
            returnHour: new Date(2023, 9, 20, 10),
            duration: 1,
            arrivalHour: new Date(2023, 9, 12, 15),
            direct: false,
            price: 100000
        },
        {
            origin: 'Medellín',
            destination: 'Bogotá',
            rt: true,
            departureDate: new Date(2023, 9, 12),
            returnDate: new Date(2023, 9, 20),
            departureHour: new Date(2023, 9, 12, 20),
            returnHour: new Date(2023, 9, 20, 10),
            duration: 1,
            arrivalHour: new Date(2023, 9, 12, 21),
            direct: true,
            price: 100000
        },
        {
            origin: 'Medellín',
            destination: 'Bogotá',
            rt: true,
            departureDate: new Date(2023, 9, 12),
            returnDate: new Date(2023, 9, 20),
            departureHour: new Date(2023, 9, 12, 22),
            returnHour: new Date(2023, 9, 20, 10),
            duration: 1,
            arrivalHour: new Date(2023, 9, 12, 23),
            direct: true,
            price: 100000
        },
        {
            origin: 'Bogotá',
            destination: 'Medellín',
            rt: true,
            departureDate: new Date(2023, 9, 12),
            returnDate: new Date(2023, 9, 20),
            departureHour: new Date(2023, 9, 12, 10),
            returnHour: new Date(2023, 9, 20, 10),
            duration: 1,
            arrivalHour: new Date(2023, 9, 12, 11),
            direct: false,
            price: 100000
        },
    ]
}