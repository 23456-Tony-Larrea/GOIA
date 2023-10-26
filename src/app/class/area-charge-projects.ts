export class AreaChargeProjects {
    id: number;
    areaChargeId: number;
    projectId: number;
    constructor(id: number, areaChargeId: number, projectId: number) {
        this.id = id;
        this.areaChargeId = areaChargeId;
        this.projectId = projectId;
    }
}
