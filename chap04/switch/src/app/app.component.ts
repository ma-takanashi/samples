import { Component } from '@angular/core';

@Component({
  selector:'my-app',
  template:`
  <form>
  <select name="season" [(ngModel)]="season">
  <option value="">四季を選択</option>
  <option value="spring">春</option>
  <option value="summer">夏</option>
  <option value="autumn">秋</option>
  <option value="winter">冬</option>
  </select>
  </form>
  <div [ngSwitch]="season">
  <span *ngSwitchCase="'spring'">春はあけぼの。。。</span>
  <span *ngSwitchCase="'summer'">夏は夜。。。</span>
  <span *ngSwitchCase="'autumn'">秋は夕暮れ。。。</span>
  <span *ngSwitchCase="'winter'">冬はつとめて。。。</span>
  <span *ngSwitchDefault>選択してください</span>
  </div>  
  `
})

export class AppComponent{
  season='';
}
