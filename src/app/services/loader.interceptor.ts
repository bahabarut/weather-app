import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderSer = inject(LoaderService);
  loaderSer.ShowLoader();

  return next(req).pipe(finalize(()=>loaderSer.HideLoader()));
};
