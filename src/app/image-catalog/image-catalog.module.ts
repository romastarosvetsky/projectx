import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCatalogRoutingModule } from './image-catalog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ImageCatalogComponent } from './components/image-catalog/image-catalog.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { ImageCatalogFilterComponent } from './components/image-catalog-filter/image-catalog-filter.component';
import { ImageCatalogService } from './services/image-catalog.service';
import { ImageCatalogNavigationService } from './services/image-catalog-navigation.service';


@NgModule({
  declarations: [
    ImageCatalogComponent,
    ImageDetailsComponent,
    ImageCatalogFilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ImageCatalogRoutingModule,
  ],
  providers: [
    ImageCatalogService,
    ImageCatalogNavigationService,
  ],
})
export class ImageCatalogModule { }
