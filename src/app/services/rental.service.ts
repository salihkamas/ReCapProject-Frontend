import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListReponseModel } from '../models/listRenponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44301/api/rentals/getrentaldetails';
  constructor(private httpClient: HttpClient) {}
  getRentals(): Observable<ListReponseModel<Rental>> {
    return this.httpClient.get<ListReponseModel<Rental>>(this.apiUrl);
  }
}
