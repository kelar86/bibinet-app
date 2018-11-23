import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPartVariants(query) {

    const url = 'https://bibinet.ru/service/get_reference/'
    const params = {
      variants: 'part_type',
      q: query
    };
    return this.http.get(url, { params: params });
  }

  getMarkModelVariants(query) {

    const url = 'https://bibinet.ru/service/get_reference/'
    const params = {
      variants: 'mark_gmodel',
      q: query
    };
    return this.http.get(url, { params: params });
  }

  getEngineVariants(query) {
    const url = 'https://bibinet.ru/service/get_reference/'
    const params = {
      variants: 'engine',
      q: query
    };
    return this.http.get(url, { params: params });
  }

  getParts() {

  }

}
