import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { ImageCatalogComponent } from './components/image-catalog/image-catalog.component';
import { ImageDetailsResolverService } from './services/image-details-resolver.service';


const routes: Routes = [
  { path: '',  component: ImageCatalogComponent },
  {
    path: ':id',
    component: ImageDetailsComponent,
    resolve: {
      image: ImageDetailsResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageCatalogRoutingModule { }
