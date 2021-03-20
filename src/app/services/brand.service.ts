import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListReponseModel } from '../models/listRenponseModel';
@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44301/api/brands/getall';
  constructor(private httpClient: HttpClient) {}
  getBrands(): Observable<ListReponseModel<Brand>> {
    return this.httpClient.get<ListReponseModel<Brand>>(this.apiUrl);
  }
}
