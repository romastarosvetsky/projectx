import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ImageItem } from '../models/image-item';
import { Observable } from 'rxjs';
import { ImageDataService } from './image-data.service';


@Injectable({
  providedIn: 'root',
})
export class ImageDetailsResolverService {

  constructor(private imageDataService: ImageDataService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ImageItem> {
    const id = +route.paramMap.get('id');
    return this.imageDataService.getImageDetails(id);
  }
}
