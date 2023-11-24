import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RestauranteListComponent],
  declarations: [RestauranteListComponent, RestauranteDetailComponent ]
})
export class RestauranteModule { }