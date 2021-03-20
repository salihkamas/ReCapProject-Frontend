import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListReponseModel } from '../models/listRenponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:44301/api/';
  constructor(private httpClient: HttpClient) {}
  getCarImages(): Observable<ListReponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getall';
    return this.httpClient.get<ListReponseModel<CarImage>>(newPath);
  }
  getCarImagesByCarId(carId: number): Observable<ListReponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getimagesbycarid?id=' + carId;
    return this.httpClient.get<ListReponseModel<CarImage>>(newPath);
  }
}
