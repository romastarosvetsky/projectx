import { ImageFormat } from '../../shared/enums/image-format.enum';


export class ImageItem {
  id: number;
  name: string;
  format: ImageFormat;
  url: string;

  constructor(id: number, name: string, format: ImageFormat, url: string) {
    this.id = id;
    this.name = name;
    this.format = format;
    this.url = url;
  }
}
