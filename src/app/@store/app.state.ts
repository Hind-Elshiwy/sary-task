import { hero } from './models/heroes.model'

export interface AppState {
    readonly heroes: hero[];
}