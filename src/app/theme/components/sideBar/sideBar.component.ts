import { Component, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SidebarService } from  '../../../services/sidebar.service';

export class Menu {
  constructor(
    public id: number,
    public name: string,
    public icon: string,
    public routerlink: string) { 

    }
}

@Component({
  selector: 'side-bar',
  templateUrl: './sideBar.html',
  encapsulation: ViewEncapsulation.None
})
export class sideBar {

  item: number;
  subscription: Subscription;

  sideBarMenus: any;
  selectedRow: Number;
  setClickedRow : Function;

  constructor(private _navService: SidebarService) {  
    
    this.sideBarMenus = [ 
      new Menu(1,'Heroes', 'pe-7s-user', '/heroes'),
      new Menu(2, 'Crisis Center', 'pe-7s-speaker', '/crisis-center')
    ];

    this.selectedRow = 0; //default first item selected

    this.setClickedRow = function(index) {
      this.selectedRow = index;
      this.item        = index;
    }

    // listen of service update
    _navService.navChange$.subscribe(item => {
       this.setClickedRow(item);
    });

  }

  ngOnInit() {}

  selectedNavItem(item: number) {
    this.item = item;
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  public toggleMenu() {}

  public scrolledChanged(isScrolled) {}

}
