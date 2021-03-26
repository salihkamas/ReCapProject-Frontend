import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListReponseModel } from '../models/listRenponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44301/api/';
  constructor(private httpClient: HttpClient) {}
  getRentals(): Observable<ListReponseModel<Rental>> {
    let newPath = this.apiUrl + 'rentals/getrentaldetails';
    return this.httpClient.get<ListReponseModel<Rental>>(newPath);
  }
  add(rental: Rental): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'rentals/add';
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }
}
