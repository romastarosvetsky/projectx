import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageSizeOption } from '../../shared/enums/page-size-option.enum';
import { PaginationConfig } from '../../shared/models/pagination-config';
import { PaginationData } from '../../shared/models/pagination-data';
import { PaginationUtilsService } from '../../core/services/pagination-utils.service';
import { ImageCatalogFilter } from '../models/image-catalog-filter';


@Injectable({
  providedIn: 'root',
})
export class FilterService {
  currentFilter$ = new BehaviorSubject(this.defaultFilter);
  currentPaginationConfig$ = new BehaviorSubject(this.defaultPaginationConfig);

  constructor(private paginationUtilsService: PaginationUtilsService) {
  }

  get filter$(): Observable<ImageCatalogFilter> {
    return this.currentFilter$.asObservable();
  }

  get paginationConfig$(): Observable<PaginationConfig> {
    return this.currentPaginationConfig$.asObservable();
  }

  get defaultPaginationConfig() {
    return {
      length: 0,
      pageSize: PageSizeOption.SM,
      pageSizeOptions: this.pageSizeOptions,
    };
  }

  get defaultFilter(): ImageCatalogFilter {
    return {
      limit: PageSizeOption.SM,
      offset: 0,
    };
  }

  private get currentFilterValue(): ImageCatalogFilter {
    return this.currentFilter$.getValue();
  }

  private get currentPaginationConfigValue(): PaginationConfig {
    return this.currentPaginationConfig$.getValue();
  }

  private get pageSizeOptions(): PageSizeOption[] {
    return [
      PageSizeOption.XS,
      PageSizeOption.SM,
      PageSizeOption.MD,
      PageSizeOption.LG,
    ];
  }

  updatePaginationFilter(paginationData: PaginationData): void {
    this.updatePaginationConfig(paginationData);
    const paginationParams = this.paginationUtilsService.getPaginationParams(paginationData);
    this.updateFilter(paginationParams);
  }

  updatePaginationConfig({length, pageSize}: PaginationData): void {
    const updatedPaginationConfig = {
      ...this.currentPaginationConfigValue,
      ...length && {length},
      ...pageSize && {pageSize},
    };
    this.currentPaginationConfig$.next(updatedPaginationConfig);
  }

  updateFilter(filter: ImageCatalogFilter): void {
    const updatedFilter = {
      ...this.currentFilterValue,
      ...filter,
    };
    this.currentFilter$.next(updatedFilter);
  }
}
