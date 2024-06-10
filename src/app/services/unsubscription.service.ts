import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsubscriptionService {
 subscriptions: Subscription = new Subscription();
  constructor() { }

  AddSub(sub: Subscription) {
    this.subscriptions.add(sub);
  }

  UnSubscribe(){
    this.subscriptions.unsubscribe();
  }
}
