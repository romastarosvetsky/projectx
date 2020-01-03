import { TestBed } from '@angular/core/testing';

import { ImageCatalogService } from './image-catalog.service';
import { HttpClientModule } from '@angular/common/http';
import { ImageDataService } from './image-data.service';

describe('ImageCatalogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
    providers: [
      ImageDataService,
    ],
  }));

  it('should be created', () => {
    const service: ImageCatalogService = TestBed.get(ImageCatalogService);
    expect(service).toBeTruthy();
  });
});
