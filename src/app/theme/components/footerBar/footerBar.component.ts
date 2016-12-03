import {Component, ViewEncapsulation} from '@angular/core';
//import {GlobalState} from '../../../global.state';

@Component({
  selector: 'footer-bar',
  template: require('./footerBar.html'),
  encapsulation: ViewEncapsulation.None
})
export class footerBar {

  constructor() {
  }

  public toggleMenu() {
  }

  public scrolledChanged(isScrolled) {

  }
}
