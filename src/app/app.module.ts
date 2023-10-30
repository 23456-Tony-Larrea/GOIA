import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './admin/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UsersComponent } from './admin/users-views/users/users.component';
import { EmployeesComponent } from './admin/employees/employees.component'; // Importa NgxSpinnerModule,
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule
import { MatSelectModule } from '@angular/material/select';
import { EditUserDialogComponent } from './admin/users-views/edit-user-dialog/edit-user-dialog.component';
import { AddUserDialogComponent } from './admin/users-views/add-user-dialog/add-user-dialog.component';
import { RolePermissionsComponent } from './admin/role-view/role-permissions/role-permissions.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { EditRoleComponent } from './admin/role-view/edit-role/edit-role.component';
import { ChargeViewsComponent } from './admin/charge-views/charge/charge-views.component';
import { AddChargeComponent } from './admin/charge-views/add-charge/add-charge.component';
import { EditChargeComponent } from './admin/charge-views/edit-charge/edit-charge.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    EmployeesComponent,
    EditUserDialogComponent,
    AddUserDialogComponent,
    RolePermissionsComponent,
    EditRoleComponent,
    ChargeViewsComponent,
    AddChargeComponent,
    EditChargeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule, // Agrega HttpClientModule a la lista de importaciones
    FormsModule,
    NgxSpinnerModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatListModule,
    ToastModule,

  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
