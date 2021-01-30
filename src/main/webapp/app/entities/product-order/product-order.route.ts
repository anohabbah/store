import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from '@store/shared/constants/authority.constants';
import { UserRouteAccessService } from '@store/core/auth/user-route-access-service';
import { IProductOrder, ProductOrder } from '@store/shared/model/product-order.model';
import { ProductOrderService } from './product-order.service';
import { ProductOrderComponent } from './product-order.component';
import { ProductOrderDetailComponent } from './product-order-detail.component';
import { ProductOrderUpdateComponent } from './product-order-update.component';

@Injectable({ providedIn: 'root' })
export class ProductOrderResolve implements Resolve<IProductOrder> {
  constructor(private service: ProductOrderService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IProductOrder> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((productOrder: HttpResponse<ProductOrder>) => {
          if (productOrder.body) {
            return of(productOrder.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new ProductOrder());
  }
}

export const productOrderRoute: Routes = [
  {
    path: '',
    component: ProductOrderComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'storeApp.productOrder.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ProductOrderDetailComponent,
    resolve: {
      productOrder: ProductOrderResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'storeApp.productOrder.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ProductOrderUpdateComponent,
    resolve: {
      productOrder: ProductOrderResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'storeApp.productOrder.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ProductOrderUpdateComponent,
    resolve: {
      productOrder: ProductOrderResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'storeApp.productOrder.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];