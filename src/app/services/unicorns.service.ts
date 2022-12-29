import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AppConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class UnicornsService {

  private resourceURL = AppConstants.API_BASE_URL;
  private resourceID = AppConstants.API_ID;
  
  public unicornsSubject = new BehaviorSubject<any>([]);

  constructor(private http : HttpClient) { }

  queryUnicorns(): Observable<HttpResponse<any>>{
    return this.http
      .get<any>(this.resourceURL+'/'+this.resourceID+"/unicorns", {
        observe: 'response',
      })
      .pipe(
        tap((unicorns) => {
          this.unicornsSubject.next(unicorns.body);
          console.log(unicorns.body);
        })
      );
  }
  
  getUnicorn(id:string):  Observable<HttpResponse<any>>{
    return this.http.get<any>(this.resourceURL+"/"+this.resourceID+'/unicorns/'+id,{observe:'response'});
  }
  
  postUnicorn(unicorn: any): Observable<HttpResponse<any>>{
   
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(
      this.resourceURL+"/"+this.resourceID+"/unicorns",unicorn,
      {
        headers:httpHeaders,
        observe:'response'
      }
      );
  }
  
  putUnicorn(unicorn: any,id:string): Observable<HttpResponse<any>>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    delete(unicorn._id);
    return this.http.put<any>(this.resourceURL+'/'+this.resourceID+'/unicorns/'+id,unicorn,{headers:httpHeaders,observe:'response'});    
  }

  deleteUnicorn(id:string):Observable<HttpResponse<any>>{
    return this.http.delete(this.resourceURL+"/"+this.resourceID+'/unicorns/'+id,{observe:'response'});   
  }


}
