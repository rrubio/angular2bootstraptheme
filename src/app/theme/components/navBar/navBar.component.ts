import { Component, ViewEncapsulation, EventEmitter } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'nav-bar',
  template: require('./navBar.html'),
  encapsulation: ViewEncapsulation.None
})
export class navBar {

  constructor(private _navService: SidebarService) {
     // code here...
  }

  public dashboardView(number) {
    console.log('unselectSideBar');
    this._navService.changeNav(number);
    
  }

  public changeNav(number) {
    this._navService.changeNav(number);
  }

  public toggleMenu() {
  }

  public scrolledChanged(isScrolled) {

  }
}
