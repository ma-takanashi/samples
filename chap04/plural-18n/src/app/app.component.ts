import { Component } from '@angular/core';

@Component({
  selector:'my-app',
  template:`<div>{{favs.length | i18nPlural:messages}}</div>`
})

export class AppComponent{
  favs=['山田リオ','鈴木洋平','腰掛並み'];
  messages={
    '=0':'[いいね！」されていません。',
    '=1':'１人だけが[いいね！」と言ってくれています。',
    'other':'#人が[いいね！」と言っています。'    
  };
}