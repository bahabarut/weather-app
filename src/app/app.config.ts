import { handleErrorInterceptor } from './services/handle-error.interceptor';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import player from 'lottie-web';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideCacheableAnimationLoader, provideLottieOptions } from 'ngx-lottie';
import { loaderInterceptor } from './services/loader.interceptor';
import { provideHotToastConfig } from '@ngneat/hot-toast';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withPreloading(PreloadAllModules)),
  provideHttpClient(withInterceptors([loaderInterceptor,handleErrorInterceptor])),
  provideAnimationsAsync(),
  provideLottieOptions({
    player: () => player
  }),
  provideCacheableAnimationLoader(),
  provideHotToastConfig()
  ]
};
