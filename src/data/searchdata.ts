export interface SearchData {
    place_id: number,
    boundingbox: number[],
    lat: number,
    lon: number,
    type: string,
    display_name: string,
    namedetails: {
        name: string,
        "name:en": string
    },
    extratags: {
        population: number,
    }
}


