import {Component} from '@angular/core';

@Component({
  selector:'my-app',
  template:`
  <form #myForm="ngForm" (ngSubmit)="show()" novalidate>
  
  <div>
  <label for="mail">メールアドレス</label><br />
  <input id="mail" name="mail" type="email"
  [(ngModel)]="user.mail" #mail="ngModel" required email />
  <span *ngIf="mail.errors?.required">メールアドレスは必須です。</span>
  <span *ngIf="mail.errors?.email">メールアドレスを正しい形式で入力してください。</span>
  </div>
 
  
  <div>
  <label for="passwd">パスワード：</label><br />
  <input id="passwd" name="passwd" type="password"
  [(ngModel)]="user.passwd"
  required minlength="6" #passwd="ngModel" />
  <span *ngIf="passwd.errors?.minlength">
  パスワードは6文字以上で入力してください。</span>
  </div>
   <div>
  <label for="name">名前（漢字）：</label><br />
  <input id="name" name="name" type="text" [(ngModel)]="user.name"
  required minlength="3" maxlength="10" #name="ngModel" />
  <span *ngIf="name.errors?.required">
  名前（漢字）は3文字以上で入力してください。</span>
  <span *ngIf="name.errors?.maxlength">
  名前（漢字）は10文字以内で入力してください。</span>
  </div>
  
  <div>
  <label for="memo">備考：</label><br />
  <textarea id="memo" name="memo" rows="5" cols="30"
  [(ngModel)]="user.memo" maxlength="10" #memo="ngModel"></textarea>
  <span *ngIf="memo.errors?.maxlength">
  備考は10文字以内で入力してください。</span>
  </div>
  <div>
  <input type="submit" value="送信"
  [disabled]="myForm.invalid" />
  </div>
  </form>
  `
})

export class AppComponent{
  user={
    mail:'hoge@example.com',
    passwd:'',
    name:'名無権兵衛',
    memo:'メモ'

  };
  show(){
  console.log('名前（漢字）：'+this.user.name);
  console.log('備考：'+this.user.memo);  
  };
}