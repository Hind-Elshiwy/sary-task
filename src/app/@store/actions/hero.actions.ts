import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { hero } from '../models/heroes.model';

export const GET_HEROES = '[HEROES] Get';
export const SET_HEROES = '[HEROES] Set';

export class GetHeroes implements Action {
    readonly type = GET_HEROES

    constructor() { }
}
export class SetHeros implements Action {

    readonly type = SET_HEROES;

    constructor(public payload: hero[]) { }
}


export type Actions = GetHeroes | SetHeros 