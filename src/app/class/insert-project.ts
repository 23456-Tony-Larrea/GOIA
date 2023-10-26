
export class InsertProject {
    name: string;
    description: string;
    codeReferences:string;
    constructor(name: string, description: string,codeReferences:string) {
        this.name = name;
        this.description = description;
        this.codeReferences=codeReferences;
    }
}
