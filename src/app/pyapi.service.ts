import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PyapiService {

  public baseUrl: string = "http://192.168.86.26:5500/api/rnd-img";

  constructor(private http: HttpClient){}

  getImg(): Observable<Blob>{
    console.log("dfgdfgfdg");

    return this.http.get(this.baseUrl, {responseType: 'arraybuffer'}).pipe(
      map((data: ArrayBuffer) => new Blob([data], { type: 'image/png'}))
    )};

}
