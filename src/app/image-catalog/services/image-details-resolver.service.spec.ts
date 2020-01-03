import { TestBed } from '@angular/core/testing';

import { ImageDetailsResolverService } from './image-details-resolver.service';
import { ImageDataService } from './image-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('ImageDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
    providers: [
      ImageDataService,
    ],
  }));

  it('should be created', () => {
    const service: ImageDetailsResolverService = TestBed.get(ImageDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
