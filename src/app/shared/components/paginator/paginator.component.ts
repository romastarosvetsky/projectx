import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationData } from '../../models/pagination-data';
import { PaginationConfig } from '../../models/pagination-config';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  @Input() config: PaginationConfig;
  @Output() pageChanged = new EventEmitter<PaginationData>();

  onPageChange(paginationData: PaginationData): void {
    this.pageChanged.next(paginationData);
  }
}
