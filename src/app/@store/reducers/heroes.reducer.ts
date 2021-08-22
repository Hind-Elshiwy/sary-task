import { Action } from '@ngrx/store'
import { hero } from '../models/heroes.model';
import * as HeroesActions from '../actions/hero.actions';
import * as Heros from '../../../assets/api/heroes.json';


const initialState: hero[] = []

export function reducer(state: hero[] = initialState, action: HeroesActions.Actions) {
    switch (action.type) {
        case HeroesActions.SET_HEROES:
            return [...action.payload];

        default:
            return state;
    }
}