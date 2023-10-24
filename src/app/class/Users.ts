export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    roleId: number; // Utiliza el tipo de dato number
    //coloca el campo state en boolean
    state: boolean;
    constructor(id: number, name: string, email: string, password: string, roleId: number,state:boolean) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.roleId = roleId;
      this.state = state;
    }
  }