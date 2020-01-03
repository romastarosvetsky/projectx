import { Component, OnInit } from '@angular/core';
import { ImageItem } from '../../models/image-item';
import { ImageCatalogService } from '../../services/image-catalog.service';
import { Observable } from 'rxjs';
import { ImageCatalogNavigationService } from '../../services/image-catalog-navigation.service';


@Component({
  selector: 'app-image-catalog',
  templateUrl: './image-catalog.component.html',
  styleUrls: ['./image-catalog.component.scss'],
})
export class ImageCatalogComponent implements OnInit {
  imageItems: Observable<ImageItem[]>;

  constructor(
    private imageCatalogService: ImageCatalogService,
    private imageCatalogNavigationService: ImageCatalogNavigationService,
  ) {}

  ngOnInit() {
    this.imageItems = this.imageCatalogService.filteredImages;
  }

  navigateToImageDetails(id: number): void {
    this.imageCatalogNavigationService.navigateToImageDetails(id);
  }
}
