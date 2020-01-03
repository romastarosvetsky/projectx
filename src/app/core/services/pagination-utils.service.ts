import { Injectable } from '@angular/core';
import { PaginationData } from '../../shared/models/pagination-data';
import { PaginationParams } from '../../shared/models/pagination-params';


@Injectable({
  providedIn: 'root',
})
export class PaginationUtilsService {
  getPaginationParams({pageIndex, pageSize}: PaginationData): PaginationParams {
    return {
      limit: pageSize,
      offset: this.getOffset(pageIndex, pageSize),
    };
  }

  getOffset(pageIndex: number, pageSize: number): number {
    return pageIndex * pageSize;
  }
}
