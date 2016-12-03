import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  template: `
    <p>Welcome to the Crisis Center</p>
  `
})
export class CrisisCenterHomeComponent { 
  constructor(
    private router: Router) {
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/