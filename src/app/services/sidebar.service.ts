import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

let sideBarMenus = [ 'Heroes', 'Crisis Center' ];

@Injectable()
export class SidebarService{  
  
  private _navItem = new Subject<number>();
  navChange$       = this._navItem.asObservable();
  
  constructor() {}

  // service command
  changeNav(number) {
    this._navItem.next(number);
  } 

  navItem() {
    return this._navItem;
  }

  selected() {  
    
  }

  unselect(id: number) {

  }

}
