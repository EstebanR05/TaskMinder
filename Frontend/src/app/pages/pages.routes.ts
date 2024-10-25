import { Routes } from '@angular/router';
import { TaskListComponent } from '../pages/Task/task-list/task-list.component';
import { TaskManagerComponent } from '../pages/Task/task-manager/task-manager.component';


export const pagesRoutes: Routes = [
  { 
    path: "task", 
    loadChildren: () => import('./Task/task.module').then((m) => m.TaskModule)
  },
];
