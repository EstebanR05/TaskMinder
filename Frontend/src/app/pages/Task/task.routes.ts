import { Routes } from '@angular/router';
import { TaskListComponent } from '../Task/task-list/task-list.component';
import { TaskManagerComponent } from '../Task/task-manager/task-manager.component';

export const taskRoute: Routes = [
    { path: "", component: TaskListComponent },
    { path: "create", component: TaskManagerComponent },
    { path: "update/:id", component: TaskManagerComponent },
];
