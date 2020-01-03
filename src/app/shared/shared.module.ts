import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatToolbarModule,
} from '@angular/material';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SelectComponent } from './components/select/select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './components/search-input/search-input.component';


const MAT_MODULES = [
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatSelectModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
];


@NgModule({
  declarations: [
    CatalogItemComponent,
    PaginatorComponent,
    SelectComponent,
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    ...MAT_MODULES,
    ReactiveFormsModule,
  ],
  exports: [
    ...MAT_MODULES,
    CatalogItemComponent,
    PaginatorComponent,
    SelectComponent,
    SearchInputComponent,
  ],
})
export class SharedModule {
}
