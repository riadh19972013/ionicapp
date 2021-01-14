import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesDetailsPageRoutingModule } from './movies-details-routing.module';

import { MoviesDetailsPage } from './movies-details.page';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesDetailsPageRoutingModule
  ],
  declarations: [MoviesDetailsPage]
})
export class MoviesDetailsPageModule {}
