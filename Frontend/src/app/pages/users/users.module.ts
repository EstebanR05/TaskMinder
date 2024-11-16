import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { userRoutes } from './users.routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UsersModule { }
