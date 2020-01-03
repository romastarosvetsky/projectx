import { TestBed } from '@angular/core/testing';

import { ImageDataService } from './image-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ImageDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
    providers: [
      HttpClient,
    ],
  }));

  it('should be created', () => {
    const service: ImageDataService = TestBed.get(ImageDataService);
    expect(service).toBeTruthy();
  });
});
