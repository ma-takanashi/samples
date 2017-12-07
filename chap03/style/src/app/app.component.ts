import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div [style.background-color]="bcolor ? '#0ff' : ''">
  WINGSプロジェクト</div>
  `
})

export class AppComponent{
  bcolor=false;
}

