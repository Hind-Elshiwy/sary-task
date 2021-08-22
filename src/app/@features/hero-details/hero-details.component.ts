import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as HeroesActions from '../../@store/actions/hero.actions';
import { hero } from '../../@store/models/heroes.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  heroDetails:any = {};
  constructor(
    private route: ActivatedRoute,
    private store: Store

  ) {
    this.store.dispatch(new HeroesActions.GetHeroes());

    this.route.params
      .forEach(params => {
        this.store.select(state => state).subscribe((data: any) => {
          this.heroDetails = data['heroes'].filter((hero: hero) => hero['id'] == params.id)[0]
        });
      })
  }

  ngOnInit(): void {
  }

}
