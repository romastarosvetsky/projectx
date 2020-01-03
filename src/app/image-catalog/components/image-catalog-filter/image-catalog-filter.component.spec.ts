import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCatalogFilterComponent } from './image-catalog-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../shared/shared.module';

describe('ImageCatalogFilterComponent', () => {
  let component: ImageCatalogFilterComponent;
  let fixture: ComponentFixture<ImageCatalogFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ImageCatalogFilterComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCatalogFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
