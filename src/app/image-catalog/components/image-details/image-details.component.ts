import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageItem } from '../../models/image-item';
import { ImageCatalogNavigationService } from '../../services/image-catalog-navigation.service';


@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss'],
})
export class ImageDetailsComponent implements OnInit {
  image: ImageItem;

  constructor(private route: ActivatedRoute, private navigationService: ImageCatalogNavigationService) {
  }

  ngOnInit() {
    this.route.data
      .subscribe(({image}) => {
        this.image = image;
      });
  }

  navigateToCatalog(): void {
    this.navigationService.navigateToImageCatalog();
  }
}
