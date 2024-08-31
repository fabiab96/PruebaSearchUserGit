import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppResponseService<T> {
  httpClient = inject(HttpClient);
  url = signal('');
  constructor() {}
  get = (params?: HttpParams) => this.httpClient.get<T>(this.url(), { params });
}
