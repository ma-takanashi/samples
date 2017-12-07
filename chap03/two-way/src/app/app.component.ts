import { Component } from '@angular/core';

@Component({
  selector:'my-app',
  template:`
  <form>
  <label for="name">名前：</label>
  <input id="name" name="name" type="text" [ngModel]="myName" (ngModelChange)="myName=$event.toUpperCase()" />
  <div>こんにちは、{{myName}}さん！</div>
  </form>
  `
})

export class AppComponent{
  myName=`山田`;
}