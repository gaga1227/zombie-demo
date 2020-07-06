import { Injectable } from '@angular/core';
import { Instructions, Results } from '../types/types';
import { moveZombies } from '../utils/utils';

const INITIAL_ZOMBIE_COUNT = 1; // always starts with one zombie

@Injectable({
  providedIn: 'root'
})
export class ZombieService {

  /**
   * getResults
   * @param instructions
   * @returns {Results}
   */
  public getResults(instructions: Instructions): Results {
    const results: Results = {
      zombieScore: null,
      zombiePositions: null,
      creaturesLeft: null
    };

    // final zombies positions when all zombies completed moving instructions
    const {finalZombies, creaturesLeft} = moveZombies(
      instructions.zombiePosition,
      instructions.zombieMoveSteps,
      instructions.creaturePositions,
      instructions.dimension
    );

    // populate results and return
    results.zombieScore = finalZombies.length - INITIAL_ZOMBIE_COUNT;
    results.zombiePositions = finalZombies;
    results.creaturesLeft = creaturesLeft;
    return results;
  }
}




