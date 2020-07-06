import { Component, OnInit, Output } from '@angular/core';
import { InstructionsApiService } from './services/instructions-api.service';
import { Instructions, Results } from './types/types';
import { ZombieService } from './services/zombie.service';

@Component({
  selector: 'app-zombie-demo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Output() isRemoteLoaded = false;
  @Output() isRemoteDataLoadError = false;

  @Output() results: Results = null;
  @Output() instructions: Instructions = null;

  constructor(
    private instructionsApiService: InstructionsApiService,
    private zombieService: ZombieService
  ) {
  }

  ngOnInit() {
    this._loadInstructions();
  }

  /**
   * _loadInstructions - load remote instructions from API service
   *
   * @private
   * @return {void}
   */
  private _loadInstructions() {
    this.instructionsApiService.getInstructions().subscribe(
      (data: Instructions) => {
        this.isRemoteDataLoadError = false;
        this.instructions = {...data};
        this.results = this.zombieService.getResults(this.instructions);
      },
      (errorResponse) => {
        this.isRemoteDataLoadError = true;
      },
      () => {
        this.isRemoteLoaded = true;
      }
    );
  }
}
