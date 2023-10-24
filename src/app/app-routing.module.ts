import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component'; // Add this
import { UsersComponent } from './admin/users-views/users/users.component';
import { RoleViewsComponent } from './admin/role-views/role-views.component';


const routes: Routes = [
  { path:'', pathMatch:'full',component: LoginComponent }, // Add this
   { path: 'users', component: UsersComponent }
  , { path: 'roles', component: RoleViewsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
