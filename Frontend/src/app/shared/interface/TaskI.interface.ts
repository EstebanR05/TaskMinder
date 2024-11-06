export interface TaskI {
    id: any,
    name: string,
    description: string,
    createAt: string,
    limit: string,
    stateId: any,
    priorityId: any,
    creatorId: any,
    priorityName?: string,
    stateName?: string,
    creatorName?: string,
    responsableName?: string,
}