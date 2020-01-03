import { Component, OnInit } from '@angular/core';
import { PaginationData } from '../../../shared/models/pagination-data';
import { FilterService } from '../../services/filter.service';
import { SelectOption } from '../../../shared/models/select-option';
import { ImageFormat } from '../../../shared/enums/image-format.enum';
import { PaginationConfig } from '../../../shared/models/pagination-config';
import { Observable } from 'rxjs';


const DEFAULT_FORMAT_OPTIONS = [
  new SelectOption(ImageFormat.webp),
  new SelectOption(ImageFormat.jpg),
];


@Component({
  selector: 'app-image-catalog-filter',
  templateUrl: './image-catalog-filter.component.html',
  styleUrls: ['./image-catalog-filter.component.scss'],
})
export class ImageCatalogFilterComponent implements OnInit {
  paginationConfig: Observable<PaginationConfig>;
  formatOptions: SelectOption[] = DEFAULT_FORMAT_OPTIONS;
  searchDelay = 500;

  constructor(private filterService: FilterService) {
  }

  ngOnInit() {
    this.paginationConfig = this.filterService.paginationConfig$;
  }

  onPageChanged(pagination: PaginationData): void {
    this.filterService.updatePaginationFilter(pagination);
  }

  onFormatChanged(format: ImageFormat): void {
    this.filterService.updateFilter({
      format,
    });
  }

  onSearchChanged(name: string): void {
    this.filterService.updateFilter({
      name,
    });
  }
}
