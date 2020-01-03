import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';
import { PageSizeOption } from '../../shared/enums/page-size-option.enum';
import { ImageFormat } from '../../shared/enums/image-format.enum';

describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#updatePaginationFilter should set correct pagination and filter', () => {
    const paginationData = {
      previousPageIndex: 1,
      pageIndex: 2,
      pageSize: PageSizeOption.MD,
      length: 70,
    };
    const expectedPaginationConfig = {
      ...service.defaultPaginationConfig,
      pageSize: PageSizeOption.MD,
      length: 70,
    };
    const expectedFilter = {
      limit: PageSizeOption.MD,
      offset: PageSizeOption.MD * 2,
    };
    service.updatePaginationFilter(paginationData);
    expect(service.currentPaginationConfig$.getValue()).toEqual(expectedPaginationConfig);
    expect(service.currentFilter$.getValue()).toEqual(expectedFilter);
  });

  it('#updateFilter should set correct pagination', () => {
    const paginationFilter = {
      limit: 10,
      offset: 30,
    };
    const expectedPaginationFilter = {
      ...service.defaultFilter,
      ...paginationFilter,
    };
    service.updateFilter(paginationFilter);
    expect(service.currentFilter$.getValue()).toEqual(expectedPaginationFilter);
  });

  it('#updateFilter should set correct name', () => {
    const filter = {
      name: 'picture1',
    };
    const expectedFilter = {
      ...service.defaultFilter,
      ...filter,
    };
    service.updateFilter(filter);
    expect(service.currentFilter$.getValue()).toEqual(expectedFilter);
  });

  it('#updateFilter should set correct format', () => {
    const filter = {
      format: ImageFormat.jpg,
    };
    const expectedFilter = {
      ...service.defaultFilter,
      ...filter,
    };
    service.updateFilter(filter);
    expect(service.currentFilter$.getValue()).toEqual(expectedFilter);
  });
});
