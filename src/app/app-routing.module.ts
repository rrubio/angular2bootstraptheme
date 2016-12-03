import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard }          from './auth-guard.service';
import { PreloadSelectedModules } from './selective-preload-strategy';

@NgModule({
  imports: [
    RouterModule.forRoot([      
      {
        path: 'admin',
        loadChildren: 'app/pages/admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
      },
      {
        path: 'crisis-center',
        loadChildren: 'app/pages/crisis-center/crisis-center.module#CrisisCenterModule',
        data: {
          preload: true
        }
      },
      {
        path: 'dashboard',
        loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'
      }
      
    ],
    { preloadingStrategy: PreloadSelectedModules })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    PreloadSelectedModules
  ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/