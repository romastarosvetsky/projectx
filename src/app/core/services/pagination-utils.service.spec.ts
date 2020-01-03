import { TestBed } from '@angular/core/testing';

import { PaginationUtilsService } from './pagination-utils.service';

describe('PaginationUtilsService', () => {
  let paginationUtilsService: PaginationUtilsService;
  const paginationData1 = {
    pageSize: 10,
    pageIndex: 3,
  };
  const paginationData2 = {
    pageSize: 5,
    pageIndex: 3,
  };
  beforeEach(() => paginationUtilsService = TestBed.get(PaginationUtilsService));

  it('should be created', () => {
    expect(paginationUtilsService).toBeTruthy();
  });

  it('#getOffset should return valid value', () => {
    const expectedOffset1 = 30;
    const expectedOffset2 = 15;
    expect(paginationUtilsService.getOffset(paginationData1.pageIndex, paginationData1.pageSize)).toBe(expectedOffset1);
    expect(paginationUtilsService.getOffset(paginationData2.pageIndex, paginationData2.pageSize)).toBe(expectedOffset2);
  });

  it('#getPaginationParams should return valid value', () => {
    const expectedParams1 = {
      limit: 10,
      offset: 30,
    };
    const expectedParams2 = {
      limit: 5,
      offset: 15,
    };
    expect(paginationUtilsService.getPaginationParams(paginationData1)).toEqual(expectedParams1);
    expect(paginationUtilsService.getPaginationParams(paginationData2)).toEqual(expectedParams2);
  });
});
