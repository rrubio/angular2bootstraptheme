import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { NgaModule }            from './theme/nga.module';
import { PagesModule }          from './pages/pages.module';

import { HeroesModule }         from './pages/heroes/heroes.module';
//import { DashboardModule }      from './pages/dashboard/dashboard.module';
import { LoginRoutingModule }   from './login-routing.module';
import { LoginComponent }       from './login.component';

import { DialogService }        from './dialog.service';
import { SidebarService }       from  './services/sidebar.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    LoginRoutingModule,
    AppRoutingModule,
    NgaModule.forRoot(),
    PagesModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    DialogService,
    SidebarService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/