import { Component } from '@angular/core';

@Component({
  selector:'my-app',
  template:`
  <form>
  <label for="show">表示／非表示：</label>
  <input id="show" name="show" type="checkbox"
  [(ngModel)]="show" />
  </form>
  <div *ngIf="show; then trueContent; else elseContent">
  この部分は無視される！
  </div>
  <ng-template #trueContent>
  <p>WINGSプロジェクトは、当初、ライター。。。</p>
  </ng-template>
  <ng-template #elseContent>
  <h3 style="color:Red">非表示中です。</h3>
  </ng-template>
  `
})

export class AppComponent{
  show=false;
}