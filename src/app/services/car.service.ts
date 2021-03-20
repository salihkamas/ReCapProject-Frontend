import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListReponseModel } from '../models/listRenponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44301/api/';
  constructor(private httpClient: HttpClient) {}
  getCars(): Observable<ListReponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListReponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId: number): Observable<ListReponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getbybrandid?brandid=' + brandId;
    return this.httpClient.get<ListReponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId: number): Observable<ListReponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getbycolorid?colorid=' + colorId;
    return this.httpClient.get<ListReponseModel<Car>>(newPath);
  }
  getCarDetail(carId: number): Observable<ListReponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailbycarid?carId=' + carId;
    return this.httpClient.get<ListReponseModel<Car>>(newPath);
  }
}
