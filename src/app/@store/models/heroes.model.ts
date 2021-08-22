
export class hero {
    constructor(id: number, description: string, powers: string, name: string, rate: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.powers = powers;
        this.rate = rate;
    }
    "id": number;
    "name": string;
    "description": string;
    "powers": string;
    "rate": number;
}