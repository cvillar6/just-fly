import { City } from "../models/city.model"

export const getCities = (): City[] => {
    return [
        { code: 'LET', name: 'Leticia' },
        { code: 'MED', name: 'Medellín' },
        { code: 'ARA', name: 'Arauca' },
        { code: 'BAR', name: 'Barranquilla' },
        { code: 'BOG', name: 'Bogotá' },
    ]
}
