import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageItem } from '../models/image-item';


@Injectable({
  providedIn: 'root',
})
export class ImageDataService {
  private baseUrl = 'api';

  constructor(private http: HttpClient) {
  }

  getImageDetails(id: number): Observable<any> {
    return this.http.get(this.getRequestUrl(`images/${id}`));
  }

  getImages(filter): Observable<any> {
    return this.http.get(
      this.getRequestUrl(`images`),
      {params: this.getMockHttpParams(filter)},
    ).pipe(
      map((images: ImageItem[]) => this.convertImagesMockResponse(images, filter)),
    );
  }

  private getMockHttpParams(filter): HttpParams {
    return new HttpParams({
      fromObject: {
        ...filter.name && {name: filter.name},
        ...filter.format && {format: filter.format},
      },
    });
  }

  private convertImagesMockResponse(images: ImageItem[], filter)  {
    return {
      results: images.slice(filter.offset, filter.limit + filter.offset),
      count: images.length,
    };
  }

  private getRequestUrl(url: string): string {
    return `${this.baseUrl}/${url}`;
  }
}
