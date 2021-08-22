import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './@core/home/home.component';
import { InternetConnectionComponent } from './@shared/internet-connection/internet-connection.component';
import { NotFoundComponent } from './@shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'heroes', loadChildren: () => import('./@features/heroes.module').then(m => m.HeroesModule) },
  { path: 'internet-connection', component: InternetConnectionComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
