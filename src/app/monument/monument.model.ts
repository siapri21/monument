export interface Monument {
    id: number,
    name: string,
    country: string,
    city: string,
    description: string,
    buildYear?: number,
    picture: string,
    created: Date
}