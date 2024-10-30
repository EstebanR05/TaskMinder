import { Routes } from '@angular/router';
import { TaskListComponent } from '../pages/Task/task-list/task-list.component';
import { TaskManagerComponent } from '../pages/Task/task-manager/task-manager.component';


export const pagesRoutes: Routes = [
  { 
    path: "profile", 
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule)
  },
  { 
    path: "settings", 
    loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule)
  },
  { 
    path: "task", 
    loadChildren: () => import('./Task/task.module').then((m) => m.TaskModule)
  },
];
