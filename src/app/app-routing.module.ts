import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component'; // Add this
import { UsersComponent } from './admin/users-views/users/users.component';
import { RolePermissionsComponent } from './admin/role-permissions/role-permissions.component';


const routes: Routes = [
  { path:'', pathMatch:'full',component: LoginComponent }, // Add this
   { path: 'users', component: UsersComponent },
    { path: 'role-permissions', component: RolePermissionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
