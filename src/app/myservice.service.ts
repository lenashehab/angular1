import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor(private _Httpclient:HttpClient) {}

  getData():Observable<any>
   {
    return this._Httpclient.get(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
    );
  }
}
