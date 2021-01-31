import { Moment } from 'moment';
import { IInvoice } from '@store/shared/model/invoice.model';
import { IOrderItem } from '@store/shared/model/order-item.model';
import { ICustomer } from '@store/shared/model/customer.model';
import { OrderStatus } from '@store/shared/model/enumerations/order-status.model';

export interface IProductOrder {
  id?: number;
  placedDate?: Moment;
  status?: OrderStatus;
  code?: string;
  invoices?: IInvoice[];
  items?: IOrderItem[];
  customer?: ICustomer;
}

export class ProductOrder implements IProductOrder {
  constructor(
    public id?: number,
    public placedDate?: Moment,
    public status?: OrderStatus,
    public code?: string,
    public invoices?: IInvoice[],
    public items?: IOrderItem[],
    public customer?: ICustomer
  ) {}
}
