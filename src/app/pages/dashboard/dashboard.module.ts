import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { DashboardComponent }    from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeroService } from '../heroes/hero.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    HeroService
  ]
})
export class DashboardModule {

  constructor() {
    console.log('helllo');
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/