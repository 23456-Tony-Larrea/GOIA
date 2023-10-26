import { Roles } from "./Roles";
export class RolePermission {
    id: number;
    name: string;
    role:{
        id: number;
        name: string;
    }
    permissions:{
        id: number;
        name: string;
    }
    constructor(id: number, name: string,role:any,permissions:any) {
        this.id = id;
        this.name = name;
        this.role=role;
        this.permissions=permissions;
    }
}