import { TestBed } from '@angular/core/testing';

import { ImageCatalogNavigationService } from './image-catalog-navigation.service';
import { AppRoutingModule } from '../../app-routing.module';

describe('ImageCatalogNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AppRoutingModule,
    ],
  }));

  it('should be created', () => {
    const service: ImageCatalogNavigationService = TestBed.get(ImageCatalogNavigationService);
    expect(service).toBeTruthy();
  });
});
