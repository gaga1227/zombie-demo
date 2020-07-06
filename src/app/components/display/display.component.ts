import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Results, Instructions } from '../../types/types';
import { formatPosition, formatPositions } from '../../utils/utils';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnChanges {
  @Input() results: Results;
  @Input() instructions: Instructions;

  dimension: number;
  zombiePosition: string;
  creaturesPositions: string;
  zombieMoveSteps: string;
  zombieScore: number;
  zombiePositions: string;
  creaturesLeft: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.results.currentValue && !!changes.instructions.currentValue) {
      this.dimension = this.instructions.dimension;
      this.zombiePosition = formatPosition(this.instructions.zombiePosition);
      this.creaturesPositions = formatPositions(this.instructions.creaturePositions);
      this.zombieMoveSteps = this.instructions.zombieMoveSteps.join('');

      this.zombieScore = this.results.zombieScore;
      this.zombiePositions = formatPositions(this.results.zombiePositions);
      this.creaturesLeft = formatPositions(this.results.creaturesLeft);
    }
  }
}
