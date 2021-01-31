import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.StoreProductModule),
      },
      {
        path: 'product-categories',
        loadChildren: () => import('./product-category/product-category.module').then(m => m.StoreProductCategoryModule),
      },
      {
        path: 'customers',
        loadChildren: () => import('./customer/customer.module').then(m => m.StoreCustomerModule),
      },
      {
        path: 'orders',
        loadChildren: () => import('./product-order/product-order.module').then(m => m.StoreProductOrderModule),
      },
      {
        path: 'order-items',
        loadChildren: () => import('./order-item/order-item.module').then(m => m.StoreOrderItemModule),
      },
      {
        path: 'invoices',
        loadChildren: () => import('./invoice/invoice.module').then(m => m.StoreInvoiceModule),
      },
      {
        path: 'shipments',
        loadChildren: () => import('./shipment/shipment.module').then(m => m.StoreShipmentModule),
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.StoreProductModule),
      },
      {
        path: 'product-categories',
        loadChildren: () => import('./product-category/product-category.module').then(m => m.StoreProductCategoryModule),
      },
      {
        path: 'orders',
        loadChildren: () => import('./product-order/product-order.module').then(m => m.StoreProductOrderModule),
      },
      {
        path: 'order-item',
        loadChildren: () => import('./order-item/order-item.module').then(m => m.StoreOrderItemModule),
      },
      {
        path: 'invoice',
        loadChildren: () => import('./invoice/invoice.module').then(m => m.StoreInvoiceModule),
      },
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.StoreCustomerModule),
      },
      {
        path: 'product-order',
        loadChildren: () => import('./product-order/product-order.module').then(m => m.StoreProductOrderModule),
      },
      {
        path: 'shipment',
        loadChildren: () => import('./shipment/shipment.module').then(m => m.StoreShipmentModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class StoreEntityModule {}
