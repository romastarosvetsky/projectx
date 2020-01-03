import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCatalogComponent } from './image-catalog.component';
import { ImageDetailsComponent } from '../image-details/image-details.component';
import { ImageCatalogFilterComponent } from '../image-catalog-filter/image-catalog-filter.component';
import { SharedModule } from '../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageCatalogService } from '../../services/image-catalog.service';
import { Observable, of } from 'rxjs';
import { ImageItem } from '../../models/image-item';
import { MockImageItem } from '../../models/mock-image-item';
import { ImageFormat } from '../../../shared/enums/image-format.enum';


describe('ImageCatalogComponent', () => {
  let component: ImageCatalogComponent;
  let fixture: ComponentFixture<ImageCatalogComponent>;
  let imageCatalogServiceStub: Partial<ImageCatalogService>;
  imageCatalogServiceStub = {
    get filteredImages(): Observable<ImageItem[]> {
      return of([
        new MockImageItem(1, ImageFormat.jpg),
      ]);
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ImageCatalogComponent,
        ImageDetailsComponent,
        ImageCatalogFilterComponent,
      ],
      imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
      ],
      providers: [
        {provide: ImageCatalogService, useValue: imageCatalogServiceStub },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
