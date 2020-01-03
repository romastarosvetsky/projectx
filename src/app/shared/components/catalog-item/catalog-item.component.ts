import { ChangeDetectionStrategy, Component, Input } from '@angular/core';


@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogItemComponent {
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() subtitle: string;
}
