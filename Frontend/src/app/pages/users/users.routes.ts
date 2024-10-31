import { Routes } from '@angular/router';
import { UserListComponent } from '../users/user-list/user-list.component';
import { UserManagerComponent } from '../users/user-manager/user-manager.component';


export const userRoutes: Routes = [
    { path: "", component: UserListComponent },
    { path: "create", component: UserManagerComponent },
    { path: "update/:id", component: UserManagerComponent },
];