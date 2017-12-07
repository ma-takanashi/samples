import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div _ngcontent-c0=""class="line back fore">WINGSプロジェクト</div>
  `,
  styles:[`
  .line{border:solid 1px #f00;}
  .back{background-color:#0ff;}
  .fore{ color:Red;}
  `]
})

export class AppComponent{
//  clazz='fore';
flag=false;

}