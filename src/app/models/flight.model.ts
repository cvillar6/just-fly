export interface Flight {
    origin: string,
    destination: string,
    rt: boolean,
    departureDate: Date,
    returnDate?: Date,
    departureHour?: Date,
    returnHour?: Date,
    duration?: number,
    arrivalHour?: Date,
    direct?: boolean,
    price?: number
}