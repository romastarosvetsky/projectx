import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ImageCatalogNavigationService {

  constructor(private router: Router) {
  }

  navigateToImageDetails(id: number): void {
    this.router.navigate(['/catalog', id]);
  }

  navigateToImageCatalog(): void {
    this.router.navigate(['/catalog']);
  }
}
