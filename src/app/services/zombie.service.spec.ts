import { inject, TestBed } from '@angular/core/testing';
import { ZombieService } from './zombie.service';
import { GridPosition, Instructions } from '../types/types';

describe('ZombieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZombieService]
    });
  });

  it('should getResults() return correct results from instructions', inject(
    [ZombieService],
    (zombieService: ZombieService) => {
      const instructions: Instructions = {
        dimension: 4,
        zombiePosition: [2, 1],
        creaturePositions: [
          [0, 1],
          [1, 2],
          [3, 1]
        ],
        zombieMoveSteps: ['D', 'L', 'U', 'U', 'R', 'R']
      };
      const results = zombieService.getResults(instructions);

      // asserts
      expect(results).toBeDefined();
      expect(results.zombieScore).toBe(3);
      expect(results.zombiePositions).toBeDefined();
      expect(results.zombiePositions.length).toBe(4);
      _verifyPositions(results.zombiePositions, [[3, 0], [2, 1], [1, 0], [0, 0]]);
      _verifyPositions(results.creaturesLeft, []);
    }
  ));

  // utils
  function _verifyPositions(positions: Array<GridPosition>, expectedPositions: Array<GridPosition>) {
    expect(positions.length).toBe(expectedPositions.length);
    positions.forEach((position, index) => {
      expect(position[0]).toBe(expectedPositions[index][0]);
      expect(position[1]).toBe(expectedPositions[index][1]);
    });
  }
});
