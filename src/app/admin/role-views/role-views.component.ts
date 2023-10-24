import { Component } from '@angular/core';
import { Roles } from '../../class/Roles';

@Component({
  selector: 'app-role-views',
  templateUrl: './role-views.component.html',
  styleUrls: ['./role-views.component.css']
})
export class RoleViewsComponent {
  roles: Roles[] = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'User' },
    { id: 3, name: 'Guest' }
  ];
  selectedRole: Roles = { id: 0, name: '' };
  
  createRole() {
    // Lógica para crear un nuevo rol
  }

  selectRole(role: Roles) {
    this.selectedRole = role;
  }
}