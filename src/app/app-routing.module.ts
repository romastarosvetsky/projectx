import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: () => import('./image-catalog/image-catalog.module').then(mod => mod.ImageCatalogModule),
  },
  {path: '', redirectTo: '/catalog', pathMatch: 'full'},
  {path: '**', redirectTo: '/catalog'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
