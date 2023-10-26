export class Material {
    id: number;
    name: string;
    description: string;
    codeReferences:string;
    constructor(id: number, name: string, description: string,codeReferences:string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.codeReferences=codeReferences;
    }
}
