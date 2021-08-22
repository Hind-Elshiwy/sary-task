import { Component, OnInit } from '@angular/core';
import { ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/@store/app.state';
import { hero } from 'src/app/@store/models/heroes.model';
import * as HeroesActions from '../../@store/actions/hero.actions';
// import { GetHeroes } from '../../@store/actions/hero.actions';
// import { GET_HEROES } from '../../@store/actions/hero.actions';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  heroesList: hero[] = [];
  max = 5;
  isReadonly = true;
  searchKeyword: string = '';
  softChecked: boolean = false;
  sort: string = 'name';
  constructor(
    private store: Store<AppState>,
    private actions: Actions
  ) {
    this.store.dispatch(new HeroesActions.GetHeroes());
    this.store.select(state => state).subscribe(data => {
      this.heroesList = data.heroes;
    });
  }

  ngOnInit(): void { }

  toggleSort(event: any) {
    this.softChecked = !this.softChecked;
    this.sort = this.softChecked ? 'powers' : 'name';
  }


}
