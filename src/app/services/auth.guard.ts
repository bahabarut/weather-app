import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  var router = inject(Router);
  var token = localStorage.getItem("token");
  var result: boolean = false;

  if (token && token.length > 0) result = true;
  else router.navigateByUrl("login");

  return result;
};
