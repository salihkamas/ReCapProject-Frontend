import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListReponseModel } from '../models/listRenponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44301/api/brands/getall';
  constructor(private httpClient: HttpClient) {}
  getBrands(): Observable<ListReponseModel<Brand>> {
    return this.httpClient.get<ListReponseModel<Brand>>(this.apiUrl);
  }
  getBrand(brandId: number): Observable<SingleResponseModel<Brand>> {
    return this.httpClient.get<SingleResponseModel<Brand>>(
      'https://localhost:44301/api/brands/getbyid?brandid=' + brandId
    );
  }
  add(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      'https://localhost:44301/api/brands/add',
      brand
    );
  }
  update(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      'https://localhost:44301/api/brands/update',
      brand
    );
  }
  delete(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      'https://localhost:44301/api/brands/delete',
      brand
    );
  }
}
