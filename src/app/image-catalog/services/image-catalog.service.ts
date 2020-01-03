import { Injectable } from '@angular/core';
import { FilterService } from './filter.service';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { ImageDataService } from './image-data.service';
import { Observable } from 'rxjs';
import { ImageItem } from '../models/image-item';


@Injectable({
  providedIn: 'root',
})
export class ImageCatalogService {

  constructor(private filterService: FilterService, private imageDataService: ImageDataService) {
  }

  get filteredImages(): Observable<ImageItem[]> {
    return this.filterService.filter$.pipe(
      distinctUntilChanged(),
      switchMap(filter => this.imageDataService.getImages(filter)),
      tap(result => this.filterService.updatePaginationConfig({length: result.count})),
      map(result => result.results),
    );
  }
}
