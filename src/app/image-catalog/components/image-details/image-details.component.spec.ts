import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailsComponent } from './image-details.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { ImageItem } from '../../models/image-item';
import { MockImageItem } from '../../models/mock-image-item';
import { ImageFormat } from '../../../shared/enums/image-format.enum';

describe('ImageDetailsComponent', () => {
  let component: ImageDetailsComponent;
  let fixture: ComponentFixture<ImageDetailsComponent>;
  let mockImageItem: ImageItem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ImageDetailsComponent,
      ],
      imports: [
        AppRoutingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailsComponent);
    component = fixture.componentInstance;
    mockImageItem = new MockImageItem(1, ImageFormat.jpg);
    component.image = mockImageItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
