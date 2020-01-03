import { ImageFormat } from '../../shared/enums/image-format.enum';


export interface ImageCatalogFilter {
  name?: string;
  format?: ImageFormat;
  limit?: number;
  offset?: number;
}
