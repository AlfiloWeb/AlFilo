import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class NavigationService {
  private _activeTab = new Subject<string>();
  activeTab$ = this._activeTab.asObservable();

  setActiveTab(tab: string) {
    this._activeTab.next(tab);
  }
}
