import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogItemComponent } from './catalog-item.component';
import { MatCardModule } from '@angular/material';
import { MockImageItem } from '../../../image-catalog/models/mock-image-item';
import { ImageFormat } from '../../enums/image-format.enum';
import { ImageItem } from '../../../image-catalog/models/image-item';


describe('CatalogItemComponent', () => {
  let component: CatalogItemComponent;
  let fixture: ComponentFixture<CatalogItemComponent>;
  let mockImageItem: ImageItem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
      ],
      declarations: [ CatalogItemComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogItemComponent);
    mockImageItem = new MockImageItem(1, ImageFormat.jpg);
    component = fixture.componentInstance;
    component.title = mockImageItem.name;
    component.subtitle = mockImageItem.format;
    component.imageUrl = mockImageItem.url;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const titleContainer: HTMLElement = fixture.nativeElement.querySelector('mat-card-title');
    expect(titleContainer.textContent).toContain(mockImageItem.name);
  });

  it('should display subtitle', () => {
    const subtitleContainer: HTMLElement = fixture.nativeElement.querySelector('mat-card-subtitle');
    expect(subtitleContainer.textContent).toContain(mockImageItem.format);
  });

  it('should set correct image url', () => {
    const image: HTMLImageElement = fixture.nativeElement.querySelector('mat-card-content>img');
    expect(image.src).toContain(mockImageItem.url);
  });
});
