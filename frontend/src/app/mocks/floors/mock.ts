import { Floor } from "../../models/floor.model";

export const FLOORS = [
    { id: 1, name: '5o Andar', acronym: '5', bounds: [[0, 0], [413, 186]], imagePath: 'assets/maps/piso.svg', section: { id: 1, name: 'Torre 1' } },
    { id: 2, name: '4o Andar', acronym: '4', bounds: [[0, 0], [413, 186]], imagePath: 'assets/maps/terreo.svg', section: { id: 1, name: 'Torre 1' } },
    { id: 3, name: '3o Andar', acronym: '3', bounds: [[0, 0], [413, 186]], imagePath: 'assets/maps/piso.svg', section: { id: 1, name: 'Torre 1' } },
    { id: 4, name: '2o Andar', acronym: '2', bounds: [[0, 0], [413, 186]], imagePath: 'assets/maps/terreo.svg', section: { id: 1, name: 'Torre 1' } },
    { id: 5, name: '1o Andar', acronym: '1', bounds: [[0, 0], [413, 186]], imagePath: 'assets/maps/subsolo.svg', section: { id: 1, name: 'Torre 1' } },
    { id: 6, name: 'Térreo', acronym: 'T', bounds: [[0, 0], [413, 186]], imagePath: 'assets/maps/terreo.svg', section: { id: 2, name: 'Área Comum' } },
    { id: 7, name: '1o Subsolo', acronym: 'S1', bounds: [[0, 0], [413, 186]], imagePath: 'assets/maps/subsolo.svg', section: { id: 1, name: 'Torre 1' } },
];