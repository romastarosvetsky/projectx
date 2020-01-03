import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { IMAGES } from './images-mock';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
    return {
      images: IMAGES,
    };
  }
}
