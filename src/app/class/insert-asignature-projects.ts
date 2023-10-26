export class InsertAsignatureProjects {
    name: string;
    finishDate:string;
    userId:number
    areaChargeId:number
    projectId:number

    constructor(name: string, finishDate:string, userId:number,areaCharge:number,projectId:number) {
        this.name = name;
        this.finishDate=finishDate;
        this.userId=userId;
        this.areaChargeId=areaCharge;
        this.projectId=projectId;
    }
}
