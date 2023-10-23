import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component'; // Add this
import { UsersComponent } from './admin/users/users.component';


const routes: Routes = [
  { path:'', pathMatch:'full',component: LoginComponent }, // Add this
   { path: 'users', component: UsersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
