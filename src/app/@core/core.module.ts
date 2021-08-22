import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../@store/reducers/heroes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from '../@store/effects/heroes.effects';
import { RatingModule } from 'ngx-bootstrap/rating';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule ,
    StoreModule.forRoot(({heroes:reducer} ) as any),
    EffectsModule.forRoot([HeroesEffects]),
    RatingModule.forRoot(),
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
  ],
})
export class CoreModule { }
