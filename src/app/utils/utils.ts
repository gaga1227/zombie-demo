import { GridPosition, MoveStep } from '../types/types';

/**
 * formatPosition - convert single position into display format string
 *
 * @return {string}
 */
export function formatPosition(position) {
  return `(${position.toString()})`;
}

/**
 * formatPositions - convert positions into display format string
 *
 * @return {string}
 */
export function formatPositions(positions: Array<any>) {
  return `(${positions.join(')(')})`;
}

/**
 * get1DPosition
 * @param pos
 * @param maxPos
 * @param isTowardsLowerBound
 * @return {number}
 */
export function get1DPosition(
  pos: number,
  maxPos: number,
  isTowardsLowerBound: boolean
) {
  return isTowardsLowerBound
    ? pos <= 0
      ? maxPos
      : pos - 1
    : pos >= maxPos
      ? 0
      : pos + 1;
}

/**
 * get2DPosition
 * @param dimension
 * @param position
 * @param step
 * @return {GridPosition}
 */
export function get2DPosition(
  dimension: number,
  position: GridPosition,
  step: MoveStep
) {
  const maxPos = dimension - 1;
  const posX = position[0];
  const posY = position[1];

  const newPosition: GridPosition = [posX, posY];
  switch (step) {
    case 'U':
      newPosition[1] = get1DPosition(posY, maxPos, true);
      break;
    case 'D':
      newPosition[1] = get1DPosition(posY, maxPos, false);
      break;
    case 'L':
      newPosition[0] = get1DPosition(posX, maxPos, true);
      break;
    case 'R':
      newPosition[0] = get1DPosition(posX, maxPos, false);
      break;
    default:
  }

  return newPosition;
}

/**
 * isSamePosition
 * @param pos1
 * @param pos2
 * @return {boolean}
 */
export function isSamePosition(pos1: GridPosition, pos2: GridPosition) {
  return pos1[0] === pos2[0] && pos1[1] === pos2[1];
}

/**
 * moveZombies
 * @param zombieZero
 * @param moveSteps
 * @param creatures
 * @param dimension
 * @return {object}
 */
export function moveZombies(
  zombieZero: GridPosition,
  moveSteps: Array<MoveStep>,
  creatures: Array<GridPosition>,
  dimension: number
) {
  const finalZombies: Array<GridPosition> = [];
  const zombiesToMove = [zombieZero];
  let creaturesLeft = [...creatures];

  while (zombiesToMove.length > 0) {
    // each zombie starts from its original position
    let zombieLastPosition = zombiesToMove[0];

    moveSteps.forEach((step) => {
      // used to track uninfected creatures positions after current zombie move
      const newCreaturesLeft = [];
      // work out zombie latest position after zombie move
      zombieLastPosition = get2DPosition(dimension, zombieLastPosition, step);
      // go through all creatures and check if any is infected
      for (let i = 0; i < creaturesLeft.length; i++) {
        const creaturePosition = creaturesLeft[i];
        const isCreatureInfected = isSamePosition(creaturePosition, zombieLastPosition);
        if (isCreatureInfected) {
          // if infected, add creature position to zombie queue
          zombiesToMove.push(creaturePosition);
        } else {
          // otherwise, add creature position to survivors for next zombie move
          newCreaturesLeft.push(creaturePosition);
        }
      }
      // update creature survivors list for next zombie move
      creaturesLeft = [...newCreaturesLeft];
    });

    // add zombie latest position to final list after moving all steps
    finalZombies.push(zombieLastPosition);
    // remove moved zombie from to move list
    zombiesToMove.shift();
  }

  return {
    finalZombies,
    creaturesLeft
  };
}
