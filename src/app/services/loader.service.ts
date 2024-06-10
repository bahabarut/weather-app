import { ChangeDetectorRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private count = 0;
  private isLoadingSubj:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubj.asObservable();
  constructor() { }

  ShowLoader() {
    if (this.count == 0) {
      this.isLoadingSubj.next(true);
    }
    this.count++;
  }

  HideLoader() {
    this.count--;
    if (this.count === 0) {
      this.isLoadingSubj.next(false);
    }
  }
}
