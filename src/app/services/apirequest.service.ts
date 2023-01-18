import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private router: Router, private http: HttpClient) { }

  private authBearer = "Bearer 06aef429-a981-3ec5-a1f8-71d38d86481e"

  private config = {
    headers: new HttpHeaders({
      'Authorization': this.authBearer
    })
  }


  public GET(cpf: string) {
    return new Promise((resolve, reject) => {
      let url = environment.urlExt + "/consulta-cpf-df-trial/v1/cpf/" + cpf;
      this.http.get(url, this.config)
        .toPromise()
        .then(
          data => {
            resolve(data);
          }
        ).catch(error => {
          reject(error);
        })
        ;
    });
  }
  

  public POST(data: any) {
    return new Promise((resolve, reject) => {
      let url = environment.urlDB + "/cooperateds";
      this.http.post(url, data, {
      })
        .toPromise()
        .then(
          data => {
            resolve(data);
          }
        ).catch(error => {
          reject(error);
        })
        ;
    });
  }
}