import { Flight } from "../models/flight.model"

export const getReturnFlights = (): Flight[] => {
    return [
        {
            origin: 'Bogotá',
            destination: 'Medellín',
            rt: false,
            departureDate: new Date(2023, 9, 20),
            returnDate: new Date(2023, 9, 20),
            departureHour: new Date(2023, 9, 20, 10),
            duration: '1:00 h',
            arrivalHour: new Date(2023, 9, 20, 11),
            direct: false,
            price: 100000
        },
        {
            origin: 'Bogotá',
            destination: 'Medellín',
            rt: false,
            departureDate: new Date(2023, 9, 20),
            returnDate: new Date(2023, 9, 20),
            departureHour: new Date(2023, 9, 12, 12),
            duration: '1:00 h',
            arrivalHour: new Date(2023, 9, 20, 13),
            direct: true,
            price: 100000
        },
        {
            origin: 'Bogotá',
            destination: 'Medellín',
            rt: false,
            departureDate: new Date(2023, 9, 20),
            returnDate: new Date(2023, 9, 20),
            departureHour: new Date(2023, 9, 20, 14),
            duration: '1:00 h',
            arrivalHour: new Date(2023, 9, 20, 15),
            direct: true,
            price: 100000
        },
        {
            origin: 'Bogotá',
            destination: 'Medellín',
            rt: false,
            departureDate: new Date(2023, 9, 20),
            returnDate: new Date(2023, 9, 20),
            departureHour: new Date(2023, 9, 20, 22),
            duration: '1:00 h',
            arrivalHour: new Date(2023, 9, 20, 23),
            direct: true,
            price: 100000
        },
        {
            origin: 'Medellín',
            destination: 'Bogotá',
            rt: false,
            departureDate: new Date(2023, 9, 20),
            returnDate: new Date(2023, 9, 20),
            departureHour: new Date(2023, 9, 20, 10),
            duration: '1:00 h',
            arrivalHour: new Date(2023, 9, 20, 11),
            direct: false,
            price: 100000
        },
    ]
}