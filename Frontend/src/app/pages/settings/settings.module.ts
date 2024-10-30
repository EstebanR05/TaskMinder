import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoute } from './settings.routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoute)
  ]
})
export class SettingsModule { }
