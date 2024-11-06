import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pagesRoutes } from './pages.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pagesRoutes)
  ]
})
export class PagesModule { }
