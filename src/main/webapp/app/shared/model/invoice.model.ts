import { Moment } from 'moment';
import { IShipment } from '@store/shared/model/shipment.model';
import { IProductOrder } from '@store/shared/model/product-order.model';
import { InvoiceStatus } from '@store/shared/model/enumerations/invoice-status.model';
import { PaymentMethod } from '@store/shared/model/enumerations/payment-method.model';

export interface IInvoice {
  id?: number;
  date?: Moment;
  details?: string;
  status?: InvoiceStatus;
  paymentMethod?: PaymentMethod;
  paymentDate?: Moment;
  paymentAmount?: number;
  shipments?: IShipment[];
  order?: IProductOrder;
}

export class Invoice implements IInvoice {
  constructor(
    public id?: number,
    public date?: Moment,
    public details?: string,
    public status?: InvoiceStatus,
    public paymentMethod?: PaymentMethod,
    public paymentDate?: Moment,
    public paymentAmount?: number,
    public shipments?: IShipment[],
    public order?: IProductOrder
  ) {}
}
