export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    roleId: number; 
    departmentId:number;
    chargeId:number
    state: boolean;

    constructor(id: number, name: string, email: string, password: string, roleId: number,departmentId:number,chargeId:number,state:boolean) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.roleId = roleId;
      this.departmentId=departmentId;
      this.chargeId=chargeId;
      this.state = state;
    }
  }