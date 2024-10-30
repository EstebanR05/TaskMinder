import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {profileRoute} from '../profile/profile.routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoute)
  ]
})
export class ProfileModule { }
