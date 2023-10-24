export class UserRegister {
    name: string;
    email: string;
    password: string;
    roleId: any; // Utiliza el tipo de dato number
    constructor(name: string, email: string, password: string, roleId: any) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.roleId = roleId;
    }
  }