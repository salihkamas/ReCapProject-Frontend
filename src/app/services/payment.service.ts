import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  apiUrl = 'https://localhost:44301/api/';
  constructor(private httpClient: HttpClient) {}

  payment():Observable<ResponseModel> {
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<ResponseModel>(newPath);
  }
}
