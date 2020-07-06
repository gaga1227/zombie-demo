import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructionsApiService {
  readonly GET_ENDPOINT = 'assets/instructions.json';

  constructor(private httpClient: HttpClient) {
  }

  public getInstructions(): Observable<any> {
    return this.httpClient.get(this.GET_ENDPOINT);
  }
}
