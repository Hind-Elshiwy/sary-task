import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternetConnectionComponent } from './internet-connection/internet-connection.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    InternetConnectionComponent,
    NotFoundComponent
  ],
  exports: [
    InternetConnectionComponent,
    NotFoundComponent
  ],
})
export class SharedModule { }
