import { IProductCategory } from '@store/shared/model/product-category.model';
import { Size } from '@store/shared/model/enumerations/size.model';

export interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  size?: Size;
  imageContentType?: string;
  image?: any;
  category?: IProductCategory;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public price?: number,
    public size?: Size,
    public imageContentType?: string,
    public image?: any,
    public category?: IProductCategory
  ) {}
}
