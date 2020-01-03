import { ImageItem } from './image-item';
import { ImageFormat } from '../../shared/enums/image-format.enum';


export class MockImageItem extends ImageItem {
  constructor(id: number, format: ImageFormat) {
    super(
      id,
      MockImageItem.getImageName(id),
      format,
      MockImageItem.getImageSrcUrl(id, format),
    );
  }

  private static getImageName(id: number): string {
    const basePictureName = 'picture';
    return `${basePictureName}${id}`;
  }

  private static getImageSrcUrl(id: number, format: ImageFormat): string {
    const imageBaseUrl = 'https://picsum.photos/id';
    const imageWidth = 300;
    const imageHeight = 300;
    return `${imageBaseUrl}/${id}/${imageHeight}/${imageWidth}.${format}`;
  }
}
