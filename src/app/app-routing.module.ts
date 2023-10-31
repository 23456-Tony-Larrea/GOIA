import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component'; // Add this
import { UsersComponent } from './admin/users-views/users/users.component';
import { RolePermissionsComponent } from './admin/role-view/role-permissions/role-permissions.component';
import { ChargeViewsComponent } from './admin/charge-views/charge/charge-views.component';
import { DepartmentViewsComponent } from './admin/department-views/department/department-views.component';


const routes: Routes = [
  { path:'', pathMatch:'full',component: LoginComponent }, // Add this
   { path: 'users', component: UsersComponent },
    { path: 'role-permissions', component: RolePermissionsComponent },
    { path: 'charge', component: ChargeViewsComponent },
    { path: 'department', component: DepartmentViewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
