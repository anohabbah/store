import { Moment } from 'moment';
import { IOrderItem } from '@store/shared/model/order-item.model';
import { IInvoice } from '@store/shared/model/invoice.model';
import { ICustomer } from '@store/shared/model/customer.model';
import { OrderStatus } from '@store/shared/model/enumerations/order-status.model';

export interface IProductOrder {
  id?: number;
  placedDate?: Moment;
  status?: OrderStatus;
  code?: string;
  items?: IOrderItem[];
  invoices?: IInvoice[];
  customer?: ICustomer;
}

export class ProductOrder implements IProductOrder {
  constructor(
    public id?: number,
    public placedDate?: Moment,
    public status?: OrderStatus,
    public code?: string,
    public items?: IOrderItem[],
    public invoices?: IInvoice[],
    public customer?: ICustomer
  ) {}
}
