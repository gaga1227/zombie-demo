export type GridPosition = [number, number];
export type MoveStep = 'U' | 'D' | 'L' | 'R';
export type MoveSteps = Array<MoveStep>;

export interface Instructions extends Object {
  dimension: number;
  zombieMoveSteps: MoveSteps;
  zombiePosition: GridPosition;
  creaturePositions: Array<GridPosition>;
}

export interface Results {
  zombieScore: number;
  zombiePositions: Array<GridPosition>;
  creaturesLeft: Array<GridPosition>;
}
