import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListReponseModel } from '../models/listRenponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44301/api/colors/getall';
  constructor(private httpClient: HttpClient) {}
  getColors(): Observable<ListReponseModel<Color>> {
    return this.httpClient.get<ListReponseModel<Color>>(this.apiUrl);
  }
  getColor(colorId: number): Observable<SingleResponseModel<Color>> {
    return this.httpClient.get<SingleResponseModel<Color>>(
      'https://localhost:44301/api/colors/getbyid?colorid=' + colorId
    );
  }
  add(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      'https://localhost:44301/api/colors/add',
      color
    );
  }
  update(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      'https://localhost:44301/api/colors/update',
      color
    );
  }
  delete(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      'https://localhost:44301/api/colors/delete',
      color
    );
  }
}
