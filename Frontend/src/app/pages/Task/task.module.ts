import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { taskRoute } from './task.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(taskRoute),
  ]
})
export class TaskModule { }
