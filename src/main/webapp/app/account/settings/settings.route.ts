import { Route } from '@angular/router';

import { UserRouteAccessService } from '@store/core/auth/user-route-access-service';
import { SettingsComponent } from './settings.component';
import { Authority } from '@store/shared/constants/authority.constants';

export const settingsRoute: Route = {
  path: 'settings',
  component: SettingsComponent,
  data: {
    authorities: [Authority.USER],
    pageTitle: 'global.menu.account.settings',
  },
  canActivate: [UserRouteAccessService],
};
