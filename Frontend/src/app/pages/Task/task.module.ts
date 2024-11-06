import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { taskRoute } from './task.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TaskAssignUserComponent } from './task-assign-user/task-assign-user.component';
import { TooltipDirective } from '@coreui/angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(taskRoute),
  ]
})
export class TaskModule { }
