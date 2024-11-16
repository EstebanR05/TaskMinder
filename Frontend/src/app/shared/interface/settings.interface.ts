
export interface IdName {
    id: number,
    name: string
}

export interface RolsI extends IdName { }

export interface PrioritiesI extends IdName { }

export interface StatusI extends IdName { }

export enum PrincialConstants {
    first = 'Rol',
    second = 'Prioridad',
    third = 'Estado',
    fourth = 'Asignar usuario'
}