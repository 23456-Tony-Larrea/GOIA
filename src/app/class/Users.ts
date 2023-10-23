export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    roleId: number; // Utiliza el tipo de dato number
    constructor(id: number, name: string, email: string, password: string, roleId: number) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.roleId = roleId;
    }
  }