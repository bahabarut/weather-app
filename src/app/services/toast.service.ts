import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: HotToastService) { }

  ShowToast(msg: string, success: boolean) {
    const config = {
      duration: 4000,
      style: {
        border: '1px solid ' + success ? '#69cf25' : '#e63e20',
        padding: '16px',
        color: success ? '#69cf25' : '#e63e20',
      },
      iconTheme: {
        primary: success ? '#69cf25' : '#e63e20',
        secondary: '#FFFAEE',
      },
    }
    if (success)
      this.toast.success(msg, config);
    else
      this.toast.error(msg, config);
  }
}
