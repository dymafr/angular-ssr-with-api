import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformServer } from '@angular/common';

@Injectable()
export class UrlServerInterceptor implements HttpInterceptor {
  apiServer = 'http://localhost:3000';

  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (isPlatformServer(this.platformId) && request.url.startsWith('/api')) {
      request = request.clone({
        url: `${this.apiServer}${request.url}`,
      });
    }
    return next.handle(request);
  }
}
