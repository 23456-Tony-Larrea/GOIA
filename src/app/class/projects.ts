export class Projects {
    id: number;
    name: string;
    finishDate: string
    motiveDemore: string
    observation: string
    state: string
    materialId: number
    description: string
    constructor(id: number, name: string, finishDate: string, motiveDemore: string, observation: string, state: string, materialId: number, description: string) {
        this.id = id;
        this.name = name;
        this.finishDate = finishDate;
        this.motiveDemore = motiveDemore;
        this.observation = observation;
        this.state = state;
        this.materialId = materialId;
        this.description = description;
    }   
}
