export enum Direction {
    North = 'N',
    East = 'E',
    South = 'S',
    West = 'W',
    Up = 'U',
    Down = 'D'
};
export interface CoOrdinates {
    x: number;
    y: number;
    z: number;
    direction: Direction;
};
export function updateMove(initialCoOrdinates?: CoOrdinates): CoOrdinates {
    return { x: 0, y: 0, z: 0, direction: Direction.North }
}