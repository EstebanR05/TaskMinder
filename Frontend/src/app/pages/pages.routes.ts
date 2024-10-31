import { Routes } from '@angular/router';

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
  { 
    path: "users", 
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule)
  },
];
