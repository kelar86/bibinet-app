import { PartType } from './../models/part-type';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { map } from 'rxjs/operators';
import Car from '../models/car';
import Part from '../models/part';

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
    return this.http.get(url, { params: params })
      .pipe(
        map(
          (resp: any[]) => {
            return resp.map(element => {
              return new PartType({
                id: element[0],
                name: element[1]
              });
            })
          }));
  }

  getMarkModelVariants(query) {

    const url = 'https://bibinet.ru/service/get_reference/'
    const params = {
      variants: 'mark_gmodel',
      q: query
    };
    return this.http.get(url, { params: params })
      .pipe(
        map(
          (resp: any[]) => {
            return resp.map(element => {
              return new Car({
                id: element['id'],
                name: element['name'],
                marketplace: element['cd']
              });
            })
          })
      );
  }

  getEngineVariants(query) {
    const url = 'https://bibinet.ru/service/get_reference/'
    const params = {
      variants: 'engine',
      ...query
    };
    return this.http.get(url, { params: params });
  }

  getParts(options) {
    const url = `https://bibinet.ru/service/search/used_parts?format=json&ver_api=v3`
    const params = {
      ...options
    };
    return this.http.get(url, { params: params })
      .pipe(
        map((resp: any[]) => {
          return resp['data'].map(part => {
            return new Part({
              id: part.id,
              company_id: part.sb_id,
              name: part.spt_name,
              mark_model: part.mark_model,
              photo: part.photos ? part.photos.path : null,
              price: part.price,
              comment: part.csup_part_comment
            });
          })
        })
      );

  }

}
