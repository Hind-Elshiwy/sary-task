import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { RouterModule } from '@angular/router';
import { HeroesRoutingModule } from './heroes-routing.module';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { HeroesSearchPipe } from './pipes/heroes-search.pipe';
import { HeroesOrderPipe } from './pipes/heroes-order.pipe';


@NgModule({
  declarations: [
    HeroesListComponent,
    HeroDetailsComponent,
    HeroesSearchPipe,
    HeroesOrderPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HeroesRoutingModule,
    RatingModule.forRoot()
  ],
  exports: [

  ],
})
export class HeroesModule { }
