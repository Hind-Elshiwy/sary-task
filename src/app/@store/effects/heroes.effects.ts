import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { hero } from '../models/heroes.model';
import * as HeroesActions from '../actions/hero.actions';
import { HeroesService } from '../../@features/services/heroes.service';

@Injectable()
export class HeroesEffects {
    constructor(
        private actions$: Actions,
        private HeroesService: HeroesService
    ) { }

    @Effect()
    GetHeroes = this.actions$.pipe(
        ofType(HeroesActions.GET_HEROES),
        switchMap((action: HeroesActions.GetHeroes) => {
            return this.HeroesService.getHerosAction().pipe(
                map((hero: hero[]) => {
                    return new HeroesActions.SetHeros(hero);
                })
            )
        })

    );

}