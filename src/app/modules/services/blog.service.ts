import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  /*baseUrl: string;
  initialDataUrl: string;
  alertUrl: string;*/

  constructor(protected http: HttpClient) {
      /*this.baseUrl = '/blogWS';
      this.initialDataUrl = 'api';
      this.alertUrl = 'api/alert';*/
  }

  getRemotoPost(): Observable<any> {
      return this.http.get(`https://gnews.io/api/v4/search?q=watches&token=3efb3718f9e1465512e885a328befeed`);
  }

  getRemoto2Post(pagina: number, itemPorPagina: number): Observable<any> {
    let params = new HttpParams();
    params = (pagina != undefined && pagina != null) ? params.append('page', pagina) : params;
    params = (itemPorPagina != undefined && itemPorPagina != null) ? params.append('itemForPage', itemPorPagina) : params;

    return this.http.get(`/post`, { params });
  }

}
