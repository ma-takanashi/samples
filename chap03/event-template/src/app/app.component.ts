import { Component } from '@angular/core';

@Component({
  selector:'my-app',
  template:`
  <input #txt id="txt" name="txt" type="text" (input)="show(txt.value)" />
  <ul [innerHTML]="msg"></ul>
  `
})

export class AppComponent{
  msg='';

  show(input:string){
    this.msg+=`<li>${input}</li>`;
  }
}