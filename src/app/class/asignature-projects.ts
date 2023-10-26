export class AsignatureProjects {
    id: number;
    name: string;
    finishDate:string;
    userId:number
    areaChargeId:number
    projectId:number

    constructor(id: number, name: string, finishDate:string, userId:number,areaCharge:number,projectId:number) {
        this.id = id;
        this.name = name;
        this.finishDate=finishDate;
        this.userId=userId;
        this.areaChargeId=areaCharge;
        this.projectId=projectId;
    }
}
