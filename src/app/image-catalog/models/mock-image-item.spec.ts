import { MockImageItem } from './mock-image-item';
import { ImageFormat } from '../../shared/enums/image-format.enum';


describe('MockImageItem', () => {
  it('should create an instance', () => {
    expect(new MockImageItem(1, ImageFormat.webp)).toBeTruthy();
  });
});
