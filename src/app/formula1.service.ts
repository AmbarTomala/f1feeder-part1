import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Formula1Service {
  constructor(protected http: HttpClient) { }

  getdatosFormula1() {
    return this.http.get('http://ergast.com/api/f1/2013/driverStandings.json');
  }
}
