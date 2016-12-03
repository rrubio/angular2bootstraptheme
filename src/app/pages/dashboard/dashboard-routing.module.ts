import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',  component: DashboardComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { 

  constructor() {
    console.log('YEAH');
  }
}
//
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/