import { async, inject, TestBed } from '@angular/core/testing';

import { InstructionsApiService } from './instructions-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { getInstructionsResponse } from '../shared/fixtures/instructions-api.fixture';

describe('InstructionsApiService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstructionsApiService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should return instructions data when call getInstructions()', async(inject(
    [HttpTestingController, InstructionsApiService],
    (httpMock: HttpTestingController, instructionsAPIService: InstructionsApiService) => {

      // call service method
      instructionsAPIService.getInstructions().subscribe(data => {
        // verify partial mocked data
        expect(data).toBeDefined();
        expect(data.dimension).toBe(10);
        expect(data.zombieMoveSteps).toBeDefined();
        expect(data.zombieMoveSteps.length).toBe(4);
        expect(data.zombieMoveSteps[0]).toBe('U');
        expect(data.zombieMoveSteps[1]).toBe('D');
        expect(data.zombieMoveSteps[2]).toBe('L');
        expect(data.zombieMoveSteps[3]).toBe('R');
        expect(data.zombiePosition).toBeDefined();
        expect(data.zombiePosition.length).toBe(2);
        expect(data.zombiePosition[0]).toBe(0);
        expect(data.zombiePosition[1]).toBe(0);
        expect(data.creaturePositions).toBeDefined();
        expect(data.creaturePositions.length).toBe(2);
        expect(data.creaturePositions[0][0]).toBe(3);
        expect(data.creaturePositions[0][1]).toBe(0);
        expect(data.creaturePositions[1][0]).toBe(0);
        expect(data.creaturePositions[1][1]).toBe(5);
      });

      // assert request
      const req = httpMock.expectOne(instructionsAPIService.GET_ENDPOINT);
      expect(req.request.method).toEqual('GET');

      // return mock data
      req.flush(getInstructionsResponse);
    })));
});
