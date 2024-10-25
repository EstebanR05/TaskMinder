import { Routes } from '@angular/router';
import { TaskListComponent } from '../pages/Task/task-list/task-list.component';
import { TaskManagerComponent } from '../pages/Task/task-manager/task-manager.component';


export const pagesRoutes: Routes = [
  { path: "task", component: TaskListComponent },
  { path: "task/create", component: TaskManagerComponent },
  { path: "task/delete", component: TaskManagerComponent },
];
