import { Component } from '@angular/core';

@Component({
  selector:'my-app',
  template:`
  <div [style.font-size]="size">WINGSプロジェクト</div>
  `
})

export class AppComponent{
  size = '150%';
}

