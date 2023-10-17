import { City } from "../models/city.model"

export const getCities = (): City[] => {
    return [
        { code: 'MED', name: 'Medellín' },
        { code: 'BOG', name: 'Bogotá' },
    ]
}
