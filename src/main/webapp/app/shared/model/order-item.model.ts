import { IProduct } from '@store/shared/model/product.model';
import { IProductOrder } from '@store/shared/model/product-order.model';
import { OrderItemStatus } from '@store/shared/model/enumerations/order-item-status.model';

export interface IOrderItem {
  id?: number;
  quantity?: number;
  totalPrice?: number;
  status?: OrderItemStatus;
  product?: IProduct;
  order?: IProductOrder;
}

export class OrderItem implements IOrderItem {
  constructor(
    public id?: number,
    public quantity?: number,
    public totalPrice?: number,
    public status?: OrderItemStatus,
    public product?: IProduct,
    public order?: IProductOrder
  ) {}
}
