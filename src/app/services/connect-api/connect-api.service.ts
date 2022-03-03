import { Item } from '../../models/item.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Api from '../connect-api/api-data'

@Injectable({
  providedIn: 'root'
})

export class ConnectApiService {

  constructor(
    private http: HttpClient
  ) { }

  GetListItems() {
    return this.http.get<Item[]>(
      Api.BASE_URL + Api.EndpointsItem().GetItem
    );
  }
}
