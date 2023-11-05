import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FlightInfoService {

  private scanApiUrl = 'http://localhost:8080/scan';
  private getBaggageUrl = "http://localhost:8080";

  constructor(
    private http: HttpClient,
  ) { }

  public getBaggageInfo(customerId): Observable<any> {
    let params = new HttpParams().set('customerId', customerId);

    // Send the GET request
    return this.http.get(this.getBaggageUrl, { params });
  }

  public barcodeScan(barcode: String): Observable<any> {
   
      const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
      return this.http.post(this.scanApiUrl, barcode, { headers });
   
  }

  // public getAllFlightsInfo(origin : string, destination : string,fromDate : string): Observable<any> {
    
  //   const httpParams = new HttpParams();
  //   httpParams.set('origin', origin);
  //   httpParams.set('destination', destination);
  //   httpParams.set('date', fromDate);

  //   return this.http.get('http://localhost:4000/flights',
  //     {
  //       params: httpParams
  //     });
  // }

  getFlights(date: string): Observable<any> {
    // Set the parameters
    const params = new HttpParams().set('date', date);
    
    // Make the GET request
    return this.http.get("http://localhost:4000/flights", { params });
  }
}

