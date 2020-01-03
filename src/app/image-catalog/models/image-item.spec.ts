import { ImageItem } from './image-item';
import { ImageFormat } from '../../shared/enums/image-format.enum';


describe('ImageItem', () => {
  it('should create an instance', () => {
    expect(new ImageItem(1, 'picture1', ImageFormat.webp, '')).toBeTruthy();
  });
});
